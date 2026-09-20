import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eipgpmbpd.css';
import '../../css/c/c3jfxlb2o.css';
import '../../css/j/jxrn2hb_i.css';
import '../../css/y/y91newb7m.css';
import '../../css/e/ey6va_b2j.css';
import '../../css/v/vlls9bcps.css';
import '../../css/p/pv36d4bhy.css';
import '../../css/r/ryx6a8b6o.css';
import '../../css/k/kon2-0bxk.css';
import '../../css/q/qmul3vbcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eipgpmbpd"/><path class="c3jfxlb2o"/><path class="jxrn2hb_i"/><path class="y91newb7m"/><path class="ey6va_b2j"/><path class="vlls9bcps"/><path class="pv36d4bhy"/><path class="ryx6a8b6o"/><path class="kon2-0bxk"/><path class="qmul3vbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pulseweaver-dark"} {...others} />);
}

export default Component;
