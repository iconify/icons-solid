import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bepxe4bel.css';
import '../../css/j/j7sm7rbxk.css';
import '../../css/s/sai8ik0bu.css';
import '../../css/w/w-imt2b_l.css';
import '../../css/p/pp6ycgbmp.css';
import '../../css/i/itt8lj0lf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bepxe4bel"/><path class="j7sm7rbxk"/><path class="sai8ik0bu"/><path class="w-imt2b_l"/><path class="pp6ycgbmp"/><path class="itt8lj0lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-20-bold"} {...others} />);
}

export default Component;
