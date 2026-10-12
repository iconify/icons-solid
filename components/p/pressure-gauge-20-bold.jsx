import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7slukbjf.css';
import '../../css/h/hyz9tubor.css';
import '../../css/y/yu8ceqbjs.css';
import '../../css/q/q425r9b_q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u7slukbjf"/><path class="hyz9tubor"/><path class="yu8ceqbjs"/><path class="q425r9b_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pressure-gauge-20-bold"} {...others} />);
}

export default Component;
