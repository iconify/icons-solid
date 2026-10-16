import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtemedn_h.css';
import '../../css/y/y1jnin_gq.css';
import '../../css/r/rl-2a6bga.css';
import '../../css/s/srqm21bfy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rtemedn_h"/><path class="y1jnin_gq"/><path class="rl-2a6bga"/><path class="srqm21bfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cycle-48-bold"} {...others} />);
}

export default Component;
