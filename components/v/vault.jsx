import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1iyez45i.css';
import '../../css/r/r9pkz4abt.css';
import '../../css/v/v2za7c9zj.css';
import '../../css/u/ur50ksb8s.css';
import '../../css/k/kx-d07mic.css';
import '../../css/y/ybza8sb4d.css';
import '../../css/h/hkfty4bjv.css';
import '../../css/d/dw0ik1i6k.css';
import '../../css/a/a-_yxs1_t.css';
import '../../css/c/czuuyvt-r.css';
import '../../css/u/ui6uhabus.css';
import '../../css/p/p_nuiacxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m1iyez45i wm-shadow"/><path class="r9pkz4abt wm-k"/><path class="v2za7c9zj wm-k"/><path class="ur50ksb8s wm-k"/><path class="kx-d07mic wm-k"/><path class="wm-k ybza8sb4d"/><path class="hkfty4bjv wm-shine"/><path class="dw0ik1i6k wm-k"/><path class="a-_yxs1_t wm-k"/><path class="czuuyvt-r wm-k"/><path class="ui6uhabus wm-k"/><path class="p_nuiacxz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:vault"} {...others} />);
}

export default Component;
