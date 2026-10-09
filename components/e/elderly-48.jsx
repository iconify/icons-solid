import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg5rndhrj.css';
import '../../css/p/p_68d_bud.css';
import '../../css/u/uogifmbba.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xg5rndhrj"/><path class="p_68d_bud"/><path class="uogifmbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:elderly-48"} {...others} />);
}

export default Component;
