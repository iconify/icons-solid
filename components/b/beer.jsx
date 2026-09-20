import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-2uyiy9q.css';
import '../../css/a/aozpr5jui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s-2uyiy9q"/><path class="aozpr5jui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:beer"} {...others} />);
}

export default Component;
