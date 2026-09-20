import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdv87xtyx.css';
import '../../css/z/zl--y0b2x.css';
import '../../css/k/k3uqjsqga.css';
import '../../css/b/bmbapsysq.css';
import '../../css/z/zcu7i-brd.css';
import '../../css/y/yl6jvxb8v.css';
import '../../css/s/sbllh67-z.css';
import '../../css/m/mn22gsb4h.css';
import '../../css/n/nqlw7x09s.css';
import '../../css/u/u6-dpmbfg.css';
import '../../css/h/hnm7i3suq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rdv87xtyx"/><path class="zl--y0b2x"/><path class="k3uqjsqga"/><path class="bmbapsysq"/><path class="zcu7i-brd"/><path class="yl6jvxb8v"/><path class="sbllh67-z"/><path class="mn22gsb4h"/><path class="nqlw7x09s"/><path class="u6-dpmbfg"/><path class="hnm7i3suq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:bell"} {...others} />);
}

export default Component;
