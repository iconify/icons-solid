import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evn-hr1or.css';
import '../../css/q/qs65kbblc.css';
import '../../css/u/u1u3_-b2r.css';
import '../../css/f/fs7k5ctxx.css';
import '../../css/r/r3cx5smab.css';
import '../../css/y/yvn8_bb0d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="evn-hr1or"/><path class="qs65kbblc"/><path class="u1u3_-b2r"/><path class="fs7k5ctxx"/><path class="r3cx5smab"/><path class="yvn8_bb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:penguin"} {...others} />);
}

export default Component;
