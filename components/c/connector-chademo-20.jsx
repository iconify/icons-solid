import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_nd-1x5c.css';
import '../../css/y/ybmr-8bzd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e_nd-1x5c"/><path class="ybmr-8bzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-chademo-20"} {...others} />);
}

export default Component;
