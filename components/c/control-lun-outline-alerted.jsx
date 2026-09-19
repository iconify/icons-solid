import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1-rs1b4l.css';
import '../../css/f/fizwjlb_d.css';
import '../../css/f/fs962mxrf.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="z1-rs1b4l"/><path class="fizwjlb_d"/><path class="fs962mxrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:control-lun-outline-alerted"} {...others} />);
}

export default Component;
