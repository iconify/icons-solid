import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7e1cnbmq.css';
import '../../css/x/x58sms8aw.css';
import '../../css/b/bgv6lfb-u.css';
import '../../css/a/aelw60bgs.css';
import '../../css/a/a0o4rqbdq.css';
import '../../css/y/ya91-cc4g.css';
import '../../css/l/lg21pib8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7e1cnbmq wm-shadow"/><path class="wm-k x58sms8aw"/><path class="bgv6lfb-u wm-k"/><path class="aelw60bgs wm-a"/><path class="a0o4rqbdq wm-a"/><path class="wm-k ya91-cc4g"/><path class="lg21pib8b wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:indian-rupee"} {...others} />);
}

export default Component;
