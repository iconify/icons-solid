import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cjgkwhwya.css';
import '../../css/b/bw_7xbbfl.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/b/bpxha0pxg.css';
import '../../css/b/b5x9xi0bu.css';
import '../../css/w/w_iteobnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="cjgkwhwya wm-deco"/><path class="bw_7xbbfl wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="bpxha0pxg wm-k"/><path class="b5x9xi0bu wm-a"/><path class="w_iteobnw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:copy-check-blueprint"} {...others} />);
}

export default Component;
