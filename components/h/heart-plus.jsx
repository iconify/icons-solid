import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y3c9r13lv.css';
import '../../css/l/l6i4z6k_y.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/p/ph-75l5jk.css';
import '../../css/x/xc_je6bwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="y3c9r13lv"/><path class="l6i4z6k_y wm-shine"/><path class="uh01hzbyb wm-k"/><path class="ph-75l5jk wm-s"/><path class="wm-deco xc_je6bwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:heart-plus"} {...others} />);
}

export default Component;
