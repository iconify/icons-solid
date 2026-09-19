import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s27tlu9_v.css';
import '../../css/e/er9g60b0w.css';
import '../../css/t/t97ft1b0n.css';
import '../../css/n/nrqfk1bwn.css';
import '../../css/f/f71n0boah.css';
import '../../css/p/peucplb1v.css';
import '../../css/e/euq69kb0q.css';
import '../../css/j/j1bzw90uz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s27tlu9_v"/><path class="er9g60b0w"/><path class="t97ft1b0n"/><path class="nrqfk1bwn"/><path class="f71n0boah"/><path class="peucplb1v"/><path class="euq69kb0q"/><path class="j1bzw90uz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:load-b"} {...others} />);
}

export default Component;
