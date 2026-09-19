import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8j696bjr.css';
import '../../css/y/y2su3zbjj.css';
import '../../css/x/x-lqbdcjw.css';
import '../../css/o/o91pd7bfk.css';
import '../../css/h/h88cxkb5f.css';
import '../../css/l/ll73xrbxk.css';
import '../../css/w/wyy5sbbpi.css';
import '../../css/q/q1k9f6bbq.css';
import '../../css/k/k6-5-xepc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h8j696bjr"/><path class="y2su3zbjj"/><path class="x-lqbdcjw"/><path class="o91pd7bfk"/><path class="h88cxkb5f"/><path class="ll73xrbxk"/><path class="wyy5sbbpi"/><path class="q1k9f6bbq"/><path class="k6-5-xepc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-keypad-outline"} {...others} />);
}

export default Component;
