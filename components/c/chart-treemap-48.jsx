import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hun5gnd_j.css';
import '../../css/j/jh9opkozm.css';
import '../../css/j/j5lerzb3y.css';
import '../../css/s/skly4o5tg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hun5gnd_j"/><path class="jh9opkozm"/><path class="j5lerzb3y"/><path class="skly4o5tg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-treemap-48"} {...others} />);
}

export default Component;
