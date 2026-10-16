import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/siqjgac7n.css';
import '../../css/m/mplihkbyd.css';
import '../../css/h/hplakgb5n.css';
import '../../css/o/oh4_jp9dg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="siqjgac7n"/><path class="mplihkbyd"/><path class="hplakgb5n"/><path class="oh4_jp9dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geiger-counter-20-bold"} {...others} />);
}

export default Component;
