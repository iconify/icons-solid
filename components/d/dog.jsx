import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvahz701u.css';
import '../../css/z/zwi50kbsf.css';
import '../../css/r/rnfopccho.css';
import '../../css/r/r7ijce5oi.css';
import '../../css/q/qxnz8zbda.css';
import '../../css/y/y7yt2c-cx.css';
import '../../css/l/l2csiccka.css';
import '../../css/q/qe5fpccug.css';
import '../../css/e/epkqk9ish.css';
import '../../css/h/htu4r0bdk.css';
import '../../css/c/cximq-loo.css';
import '../../css/h/ha_nyobxy.css';
import '../../css/s/saqr5i03f.css';
import '../../css/z/zttglbwkh.css';
import '../../css/b/b-nwzn36o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvahz701u wm-shadow"/><path class="wm-k zwi50kbsf"/><path class="rnfopccho wm-k"/><path class="r7ijce5oi wm-k"/><path class="qxnz8zbda wm-k"/><path class="wm-k y7yt2c-cx"/><path class="l2csiccka wm-shine"/><path class="qe5fpccug wm-a"/><path class="epkqk9ish wm-a"/><path class="htu4r0bdk wm-a"/><path class="cximq-loo wm-a"/><path class="ha_nyobxy wm-a"/><path class="saqr5i03f wm-k"/><path class="wm-k zttglbwkh"/><path class="b-nwzn36o wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:dog"} {...others} />);
}

export default Component;
