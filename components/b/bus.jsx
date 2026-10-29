import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz_g4p0av.css';
import '../../css/i/it32d3oxr.css';
import '../../css/i/i9yivv3lq.css';
import '../../css/f/fkxtwmbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rz_g4p0av wm-k"/><path class="it32d3oxr wm-a"/><path class="i9yivv3lq wm-a"/><path class="fkxtwmbdp wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bus"} {...others} />);
}

export default Component;
