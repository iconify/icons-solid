import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x2c5n0b5c.css';
import '../../css/v/vviflib-v.css';
import '../../css/r/rftda5vjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="x2c5n0b5c"/><path class="vviflib-v wm-a"/><path class="rftda5vjf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gulal-solid"} {...others} />);
}

export default Component;
