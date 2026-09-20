import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d-nkafbhy.css';
import '../../css/c/c7-8isbmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d-nkafbhy"/><path class="c7-8isbmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-volume-2"} {...others} />);
}

export default Component;
