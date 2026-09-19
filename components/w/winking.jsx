import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/w/wzk08x7vl.css';
import '../../css/w/wmv80ebvk.css';
import '../../css/y/yzebgjlak.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="wzk08x7vl"/><path class="wmv80ebvk"/><path class="yzebgjlak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:winking"} {...others} />);
}

export default Component;
