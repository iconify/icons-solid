import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5w5ol4ld.css';
import '../../css/j/j17-yfbvq.css';
import '../../css/p/pyf2-y6uh.css';
import '../../css/a/abxjxkhlh.css';
import '../../css/n/nim8lcdsp.css';
import '../../css/r/rlqqvrtev.css';
import '../../css/m/m8l4knwgx.css';
import '../../css/z/zln2p1b3s.css';
import '../../css/w/wgl5qlboc.css';
import '../../css/c/cj94u5b5i.css';
import '../../css/d/d_x1bqbgq.css';
import '../../css/j/j8u7__z4v.css';
import '../../css/s/sxqv44bja.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a5w5ol4ld"/><path class="j17-yfbvq"/><path class="pyf2-y6uh"/><path class="abxjxkhlh"/><path class="nim8lcdsp"/><path class="rlqqvrtev"/><path class="m8l4knwgx"/><path class="zln2p1b3s"/><path class="wgl5qlboc"/><path class="cj94u5b5i"/><path class="d_x1bqbgq"/><path class="j8u7__z4v"/><path class="sxqv44bja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:watch"} {...others} />);
}

export default Component;
