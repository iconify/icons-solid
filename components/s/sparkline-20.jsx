import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccnocllyv.css';
import '../../css/e/eb4h0cb7r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ccnocllyv"/><path class="eb4h0cb7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sparkline-20"} {...others} />);
}

export default Component;
