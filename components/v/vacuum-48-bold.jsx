import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4kx72bov.css';
import '../../css/n/n-zjmmulx.css';
import '../../css/q/q4l9ctu0n.css';
import '../../css/u/uq78lkwmy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c4kx72bov"/><path class="n-zjmmulx"/><path class="q4l9ctu0n"/><path class="uq78lkwmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vacuum-48-bold"} {...others} />);
}

export default Component;
