import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbpyq5b3v.css';
import '../../css/z/zhdnh2bha.css';
import '../../css/o/otpwwz6mk.css';
import '../../css/k/ki1-rrbrr.css';
import '../../css/z/z361stntw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sbpyq5b3v"/><path class="zhdnh2bha"/><path class="otpwwz6mk"/><path class="ki1-rrbrr"/><path class="z361stntw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:veterinary-15"} {...others} />);
}

export default Component;
