import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/y/yoskqcbdm.css';
import '../../css/i/ipxyt99db.css';
import '../../css/i/i07n3sgqt.css';
import '../../css/r/rox8-9b8s.css';
import '../../css/x/xs768nbmt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="am770-rkn"/><path class="yoskqcbdm"/><rect class="ipxyt99db"/><circle class="i07n3sgqt"/><rect class="rox8-9b8s"/><circle class="xs768nbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:rolling-eyes"} {...others} />);
}

export default Component;
