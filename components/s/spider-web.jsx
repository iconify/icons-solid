import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llx19_bqv.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/s/sxdp1lo8c.css';
import '../../css/a/a74c774yq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="llx19_bqv"/><g class="ij2x_72vy"><path class="sxdp1lo8c"/><path class="a74c774yq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:spider-web"} {...others} />);
}

export default Component;
