import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cropnwbca.css';
import '../../css/d/dnhjjpb4j.css';
import '../../css/w/wom-ykb0n.css';
import '../../css/w/w7m43vbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cropnwbca wm-shadow"/><path class="dnhjjpb4j wm-shadow"/><path class="wom-ykb0n"/><path class="w7m43vbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:watch"} {...others} />);
}

export default Component;
