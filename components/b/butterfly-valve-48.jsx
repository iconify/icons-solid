import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axzf4ybwk.css';
import '../../css/o/ox3h7836y.css';
import '../../css/t/tq5ulf4xa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="axzf4ybwk"/><path class="ox3h7836y"/><path class="tq5ulf4xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:butterfly-valve-48"} {...others} />);
}

export default Component;
