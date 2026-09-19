import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edg0qh-xn.css';
import '../../css/a/am03yhn7c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="edg0qh-xn"/><path class="am03yhn7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:logo-rindo"} {...others} />);
}

export default Component;
