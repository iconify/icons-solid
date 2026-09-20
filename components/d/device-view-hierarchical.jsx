import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzpx7ib5z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pzpx7ib5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:device-view-hierarchical"} {...others} />);
}

export default Component;
