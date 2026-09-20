import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/krfu6kb3q.css';
import '../../css/u/ugk0bzb-s.css';
import '../../css/k/ksod32btv.css';
import '../../css/k/ko4lyrbvn.css';
import '../../css/g/gm1terbiy.css';
import '../../css/p/pm3t8d4ps.css';
import '../../css/p/p472ttwxz.css';
import '../../css/k/kh5piou6z.css';
import '../../css/j/jibp3o9ef.css';
import '../../css/x/xdj171b8t.css';
import '../../css/g/gkzpwmxcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="krfu6kb3q"/><path class="ugk0bzb-s"/><path class="ksod32btv"/><path class="ko4lyrbvn"/><path class="gm1terbiy"/><path class="pm3t8d4ps"/><path class="p472ttwxz"/><path class="kh5piou6z"/><path class="jibp3o9ef"/><path class="xdj171b8t"/><path class="gkzpwmxcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bug-minimalistic-linear"} {...others} />);
}

export default Component;
