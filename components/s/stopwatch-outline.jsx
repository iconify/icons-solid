import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd6hptbdy.css';
import '../../css/y/ydx4aab2y.css';
import '../../css/p/pnj3j0bnr.css';
import '../../css/e/ejbf23bon.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hd6hptbdy"/><path class="ydx4aab2y"/><circle class="pnj3j0bnr"/><path class="ejbf23bon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:stopwatch-outline"} {...others} />);
}

export default Component;
