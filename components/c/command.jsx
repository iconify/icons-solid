import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svcisg-2v.css';
import '../../css/q/q39xo3bho.css';
import '../../css/x/xxppldy8g.css';
import '../../css/w/ws_f3r_yy.css';
import '../../css/s/s7q7hbcbs.css';
import '../../css/g/gp-pdibzm.css';
import '../../css/x/xmxnglewj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="svcisg-2v wm-shadow"/><path class="q39xo3bho"/><path class="xxppldy8g"/><path class="ws_f3r_yy"/><path class="s7q7hbcbs"/><path class="gp-pdibzm wm-shine"/><path class="xmxnglewj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:command"} {...others} />);
}

export default Component;
