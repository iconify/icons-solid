import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffw97mbwu.css';
import '../../css/z/z15e8vbuh.css';
import '../../css/p/p9ipl3bri.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ffw97mbwu"/><rect class="z15e8vbuh"/><path class="p9ipl3bri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:hardware-chip"} {...others} />);
}

export default Component;
