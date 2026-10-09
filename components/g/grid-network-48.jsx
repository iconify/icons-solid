import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h11c3zb8o.css';
import '../../css/z/z_nkx1xuv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h11c3zb8o"/><path class="z_nkx1xuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-network-48"} {...others} />);
}

export default Component;
