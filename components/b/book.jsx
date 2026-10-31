import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuv980bjs.css';
import '../../css/y/ylcvkgb4i.css';
import '../../css/k/kfig-c0_s.css';
import '../../css/e/erxbb0a_n.css';
import '../../css/n/ngu8nfb4w.css';
import '../../css/c/comgv8bwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xuv980bjs"/><path class="wm-k ylcvkgb4i"/><path class="kfig-c0_s wm-shadow"/><path class="erxbb0a_n wm-shine"/><path class="ngu8nfb4w wm-shine"/><path class="comgv8bwc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:book"} {...others} />);
}

export default Component;
