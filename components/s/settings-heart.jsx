import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b6rar-2yr.css';
import '../../css/t/td-uynb4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b6rar-2yr"/><path class="td-uynb4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-heart"} {...others} />);
}

export default Component;
