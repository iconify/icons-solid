import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-7k1pbwv.css';
import '../../css/j/j6k-r874l.css';
import '../../css/q/q537fcb9h.css';
import '../../css/i/ic9tutawl.css';
import '../../css/r/rje9mkb_v.css';
import '../../css/o/o0mniabdz.css';
import '../../css/m/m4870yhns.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="v-7k1pbwv"/><path class="j6k-r874l"/><path class="q537fcb9h"/><path class="ic9tutawl"/><path class="rje9mkb_v"/><path class="o0mniabdz"/><path class="m4870yhns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:monkeyspeak"} {...others} />);
}

export default Component;
