import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/a/ac4_vbbiy.css';
import '../../css/t/tp-ql8b0x.css';
import '../../css/l/lh0zjccjf.css';
import '../../css/n/n9cednr3v.css';
import '../../css/g/g67_lnb6y.css';
import '../../css/z/zt63iyzlp.css';
import '../../css/z/zr66b3fbo.css';
import '../../css/h/h4nvoabtf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="ac4_vbbiy"/><path class="tp-ql8b0x"/><path class="lh0zjccjf"/><path class="n9cednr3v"/><path class="g67_lnb6y"/><path class="zt63iyzlp"/><path class="zr66b3fbo"/><path class="h4nvoabtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:grinwide"} {...others} />);
}

export default Component;
