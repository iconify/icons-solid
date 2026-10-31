import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j6i35boai.css';
import '../../css/a/ackp18bsu.css';
import '../../css/g/gf-yneexw.css';
import '../../css/s/sy15m6baj.css';
import '../../css/n/nbbvhk-9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="j6i35boai wm-shadow"/><path class="ackp18bsu wm-shadow"/><path class="gf-yneexw"/><path class="sy15m6baj"/><path class="nbbvhk-9z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-download"} {...others} />);
}

export default Component;
