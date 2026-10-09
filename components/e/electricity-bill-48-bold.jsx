import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk4s-jblr.css';
import '../../css/c/c7rnb2klb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qk4s-jblr"/><path class="c7rnb2klb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electricity-bill-48-bold"} {...others} />);
}

export default Component;
