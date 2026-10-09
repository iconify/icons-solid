import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mml-20uch.css';
import '../../css/e/e80us0jnl.css';
import '../../css/t/t9qlqybcr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mml-20uch"/><path class="e80us0jnl"/><path class="t9qlqybcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ferris-wheel-48"} {...others} />);
}

export default Component;
