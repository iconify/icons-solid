import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/peoarebot.css';
import '../../css/n/n0urq0a3z.css';
import '../../css/f/fch6rrymb.css';
import '../../css/o/ox6y2ub3r.css';
import '../../css/b/bas8edbgq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="peoarebot"/><path class="n0urq0a3z"/><path class="fch6rrymb"/><path class="ox6y2ub3r"/><path class="bas8edbgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:level-crossing-20"} {...others} />);
}

export default Component;
