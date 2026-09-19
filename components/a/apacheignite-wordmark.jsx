import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbds7eckz.css';
import '../../css/p/p6kfs-93h.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xbds7eckz"/><path class="p6kfs-93h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:apacheignite-wordmark"} {...others} />);
}

export default Component;
