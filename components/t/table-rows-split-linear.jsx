import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d0jtys32o.css';
import '../../css/h/hzl-cbcya.css';
import '../../css/b/b_mf07m0u.css';
import '../../css/l/lrz9y2bgb.css';
import '../../css/q/ql1vq9sac.css';
import '../../css/t/tg76z_b_t.css';
import '../../css/q/q9x8jtbcd.css';
import '../../css/a/a18frqptk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d0jtys32o"/><path class="hzl-cbcya"/><path class="b_mf07m0u"/><path class="lrz9y2bgb"/><path class="ql1vq9sac"/><path class="tg76z_b_t"/><path class="q9x8jtbcd"/><path class="a18frqptk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-rows-split-linear"} {...others} />);
}

export default Component;
