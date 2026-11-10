import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1ew4b0vu.css';
import '../../css/n/nnusg_b2p.css';
import '../../css/e/emm5lbblk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f1ew4b0vu"/><path class="nnusg_b2p"/><path class="emm5lbblk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fire-alarm"} {...others} />);
}

export default Component;
