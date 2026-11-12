import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qr3giu5xn.css';
import '../../css/c/ca34baqxh.css';
import '../../css/l/l56nfhv6e.css';
import '../../css/w/wwhv9711a.css';
import '../../css/b/b0cmkdksn.css';
import '../../css/b/bxqj37btp.css';
import '../../css/s/sewtzbcfr.css';

const viewBox = {"width":73,"height":88};
const content = `<path class="qr3giu5xn"/><path class="ca34baqxh"/><path class="l56nfhv6e"/><circle class="wwhv9711a"/><circle class="b0cmkdksn"/><circle class="bxqj37btp"/><path class="sewtzbcfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:eps-file"} {...others} />);
}

export default Component;
