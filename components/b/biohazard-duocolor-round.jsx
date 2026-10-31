import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjp0usbso.css';
import '../../css/u/urp0a5bwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bjp0usbso"/><path class="urp0a5bwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:biohazard-duocolor-round"} {...others} />);
}

export default Component;
