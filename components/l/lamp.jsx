import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffzm8t02t.css';
import '../../css/j/jwj-dyb0f.css';
import '../../css/c/ccwx5dbrl.css';
import '../../css/g/gl1anxbhh.css';
import '../../css/u/u-t3sn_8i.css';
import '../../css/l/lb0sqkbkx.css';
import '../../css/n/nddd__b4f.css';
import '../../css/m/miiqlbbue.css';
import '../../css/a/ahik6omso.css';
import '../../css/q/q_6zcsbnc.css';
import '../../css/h/hev0cqvhk.css';
import '../../css/a/a0jlhx8io.css';
import '../../css/x/xtru-qbwc.css';
import '../../css/d/dva6-t2hq.css';
import '../../css/u/u5z7vkbks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ffzm8t02t wm-k"/><path class="jwj-dyb0f wm-k"/><path class="ccwx5dbrl wm-k"/><path class="gl1anxbhh wm-k"/><path class="u-t3sn_8i wm-k"/><path class="lb0sqkbkx wm-k"/><path class="nddd__b4f wm-shine"/><path class="miiqlbbue wm-k"/><path class="ahik6omso wm-k"/><path class="q_6zcsbnc wm-k"/><path class="hev0cqvhk wm-shine"/><path class="a0jlhx8io wm-a"/><path class="wm-a xtru-qbwc"/><path class="dva6-t2hq wm-a"/><path class="u5z7vkbks wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:lamp"} {...others} />);
}

export default Component;
