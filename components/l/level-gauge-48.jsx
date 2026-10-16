import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl870bc1m.css';
import '../../css/t/te3lkr3kc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jl870bc1m"/><path class="te3lkr3kc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:level-gauge-48"} {...others} />);
}

export default Component;
