import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jw241zkrq.css';
import '../../css/n/nwzkmo20o.css';
import '../../css/m/msx1rfbja.css';
import '../../css/t/twmz0qemg.css';
import '../../css/i/isq2ubc0u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jw241zkrq"/><path class="nwzkmo20o"/><path class="msx1rfbja"/><path class="twmz0qemg"/><path class="isq2ubc0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tram-20"} {...others} />);
}

export default Component;
