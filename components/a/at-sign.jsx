import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvh342beq.css';
import '../../css/u/uyyrpzz_g.css';
import '../../css/g/geu9tcfwm.css';
import '../../css/y/ymmj381ie.css';
import '../../css/i/idl3lt53u.css';
import '../../css/o/o6vr7fo6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qvh342beq wm-shadow"/><path class="uyyrpzz_g wm-k"/><path class="geu9tcfwm wm-k"/><path class="wm-k ymmj381ie"/><path class="idl3lt53u wm-k"/><path class="o6vr7fo6w wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:at-sign"} {...others} />);
}

export default Component;
