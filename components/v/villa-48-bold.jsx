import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr3raed1b.css';
import '../../css/d/dln-x0qsh.css';
import '../../css/u/ubqjjwmkr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lr3raed1b"/><path class="dln-x0qsh"/><path class="ubqjjwmkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:villa-48-bold"} {...others} />);
}

export default Component;
