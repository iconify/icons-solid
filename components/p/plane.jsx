import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kl10g45yc.css';
import '../../css/u/ujqryacmb.css';
import '../../css/i/iw4ze27lj.css';
import '../../css/b/bwh2cubxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kl10g45yc wm-k"/><path class="ujqryacmb wm-k"/><path class="iw4ze27lj wm-k"/><path class="bwh2cubxl wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:plane"} {...others} />);
}

export default Component;
