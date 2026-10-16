import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk4s-jblr.css';
import '../../css/q/qrg4uebsq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qk4s-jblr"/><path class="qrg4uebsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-tax-48-bold"} {...others} />);
}

export default Component;
