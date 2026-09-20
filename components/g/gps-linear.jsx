import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xtx0s6u8w.css';
import '../../css/j/jb8hy8b-t.css';
import '../../css/m/mhrx-fb4o.css';
import '../../css/h/hk3yrq41f.css';
import '../../css/c/cd5mfpgqy.css';
import '../../css/k/kk05o5b_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xtx0s6u8w"/><path class="jb8hy8b-t"/><path class="mhrx-fb4o"/><path class="hk3yrq41f"/><path class="cd5mfpgqy"/><path class="kk05o5b_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gps-linear"} {...others} />);
}

export default Component;
