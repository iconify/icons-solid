import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/y/yoskqcbdm.css';
import '../../css/i/ipxyt99db.css';
import '../../css/a/a8xxc-agh.css';
import '../../css/r/rox8-9b8s.css';
import '../../css/s/sj6eksbcv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="am770-rkn"/><path class="yoskqcbdm"/><rect class="ipxyt99db"/><path class="a8xxc-agh"/><rect class="rox8-9b8s"/><path class="sj6eksbcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:flushed"} {...others} />);
}

export default Component;
