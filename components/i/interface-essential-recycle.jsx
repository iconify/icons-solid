import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1dcnrbny.css';
import '../../css/m/mxhrgpioc.css';
import '../../css/k/kp8spwglh.css';
import '../../css/s/s4go6bbsx.css';
import '../../css/z/znu2mxbjn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a1dcnrbny"/><path class="mxhrgpioc"/><path class="kp8spwglh"/><path class="s4go6bbsx"/><path class="znu2mxbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-recycle"} {...others} />);
}

export default Component;
