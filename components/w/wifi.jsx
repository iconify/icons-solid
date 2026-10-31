import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ue1x-2bie.css';
import '../../css/u/u176j-b2c.css';
import '../../css/k/kga1bpb4f.css';
import '../../css/r/rqmqwzynq.css';
import '../../css/i/i2tzfghgl.css';
import '../../css/c/c4qhwqb-z.css';
import '../../css/y/yvqx1i4pf.css';
import '../../css/n/nzv3ny8zr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ue1x-2bie wm-shadow"/><path class="u176j-b2c wm-k"/><path class="kga1bpb4f wm-k"/><path class="rqmqwzynq wm-k"/><path class="i2tzfghgl wm-shine"/><path class="c4qhwqb-z wm-k"/><path class="wm-k yvqx1i4pf"/><path class="nzv3ny8zr wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:wifi"} {...others} />);
}

export default Component;
