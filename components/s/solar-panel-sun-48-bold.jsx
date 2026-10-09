import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n48n_cb8l.css';
import '../../css/x/x_1_4ts6b.css';
import '../../css/j/joo39vzqh.css';
import '../../css/u/u-1jw8b_q.css';
import '../../css/j/j-ekh8rky.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n48n_cb8l"/><path class="x_1_4ts6b"/><path class="joo39vzqh"/><path class="u-1jw8b_q"/><path class="j-ekh8rky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-sun-48-bold"} {...others} />);
}

export default Component;
