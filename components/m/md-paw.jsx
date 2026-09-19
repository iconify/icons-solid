import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-9r5omfu.css';
import '../../css/v/vxwsbfy9u.css';
import '../../css/n/ngn3wxxwh.css';
import '../../css/z/zi89txbue.css';
import '../../css/l/l2sfx3bwm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z-9r5omfu"/><path class="vxwsbfy9u"/><path class="ngn3wxxwh"/><path class="zi89txbue"/><path class="l2sfx3bwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-paw"} {...others} />);
}

export default Component;
