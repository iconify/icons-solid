import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7kxfxctq.css';
import '../../css/d/du9sb8bhq.css';
import '../../css/v/vft_s4bok.css';
import '../../css/f/f-libdcom.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="r7kxfxctq"/><path class="du9sb8bhq"/><path class="vft_s4bok"/><path class="f-libdcom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pathfinder-trim"} {...others} />);
}

export default Component;
