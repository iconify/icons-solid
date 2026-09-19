import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1aohj47b.css';

const viewBox = {"width":24,"height":24,"left":0.05,"top":0.05};
const content = `<path class="i1aohj47b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:corner-down-left-outline"} {...others} />);
}

export default Component;
