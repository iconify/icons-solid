import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cc20pxixj.css';
import '../../css/l/lkc01qbuq.css';
import '../../css/h/hw1c0wpux.css';
import '../../css/i/i4ekwibmm.css';
import '../../css/h/hldyl_bvp.css';
import '../../css/e/eybsh9d0q.css';
import '../../css/x/xcoasvbhd.css';
import '../../css/u/u05v31yjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cc20pxixj wm-k"/><path class="lkc01qbuq wm-a"/><path class="hw1c0wpux wm-k"/><path class="i4ekwibmm wm-k"/><path class="hldyl_bvp wm-a"/><path class="eybsh9d0q wm-shadow"/><path class="wm-shine xcoasvbhd"/><path class="u05v31yjp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:salad"} {...others} />);
}

export default Component;
