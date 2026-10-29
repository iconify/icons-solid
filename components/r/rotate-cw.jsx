import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz13d4bra.css';
import '../../css/u/usg8-03bb.css';
import '../../css/l/lc96ybcas.css';
import '../../css/z/zsr_fophb.css';
import '../../css/u/uqarax6sy.css';
import '../../css/l/l1um66m4r.css';
import '../../css/i/ip7o8z0gn.css';
import '../../css/a/a6mowtbos.css';
import '../../css/s/s_5ne2bhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pz13d4bra wm-shadow"/><path class="usg8-03bb wm-shadow"/><path class="lc96ybcas"/><path class="zsr_fophb"/><path class="uqarax6sy"/><path class="l1um66m4r"/><path class="ip7o8z0gn wm-shine"/><path class="a6mowtbos wm-shine"/><path class="s_5ne2bhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:rotate-cw"} {...others} />);
}

export default Component;
