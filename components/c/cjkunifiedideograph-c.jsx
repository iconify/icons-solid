import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqj83jaxk.css';
import '../../css/p/pi1-wer9v.css';
import '../../css/o/oom0uccvn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kqj83jaxk"/><path class="pi1-wer9v"/><path class="oom0uccvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cjkunifiedideograph-c"} {...others} />);
}

export default Component;
