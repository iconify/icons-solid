import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rrto6ze0y.css';
import '../../css/n/n8pcbm8_y.css';
import '../../css/r/rwws492hp.css';
import '../../css/c/ck5w-7b2h.css';
import '../../css/j/jr4306bsj.css';
import '../../css/x/x318x580t.css';
import '../../css/r/rlty9_brs.css';
import '../../css/k/kgw2hlh4p.css';
import '../../css/j/jjio2s32r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rrto6ze0y wm-shadow"/><path class="n8pcbm8_y wm-shadow"/><path class="rwws492hp"/><path class="ck5w-7b2h"/><path class="jr4306bsj"/><path class="x318x580t"/><path class="rlty9_brs wm-shine"/><path class="kgw2hlh4p wm-shine"/><path class="jjio2s32r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:binary"} {...others} />);
}

export default Component;
