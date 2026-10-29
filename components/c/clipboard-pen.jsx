import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vdytwhd8o.css';
import '../../css/i/inou2mb8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vdytwhd8o"/><path class="inou2mb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clipboard-pen"} {...others} />);
}

export default Component;
