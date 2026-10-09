import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmjqnac7l.css';
import '../../css/w/w4wlpvbuu.css';
import '../../css/i/i31k85bxe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fmjqnac7l"/><path class="w4wlpvbuu"/><path class="i31k85bxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:socket-20"} {...others} />);
}

export default Component;
