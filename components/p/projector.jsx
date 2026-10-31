import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q_3x99b7q.css';
import '../../css/t/tzz-u_hra.css';
import '../../css/r/rucv27bpi.css';
import '../../css/i/it7rt0b-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="q_3x99b7q wm-shadow"/><path class="tzz-u_hra wm-shadow"/><path class="rucv27bpi"/><path class="it7rt0b-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:projector"} {...others} />);
}

export default Component;
