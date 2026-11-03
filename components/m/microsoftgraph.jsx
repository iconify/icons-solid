import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dofvcxtap.css';
import '../../css/l/lh2837xdo.css';
import '../../css/w/wjgxo22lf.css';
import '../../css/c/cyjkowbcs.css';
import '../../css/o/oi9wkvb_a.css';
import '../../css/j/ji68z_b4b.css';
import '../../css/z/zt50sebuf.css';
import '../../css/e/ea4rlcbbs.css';
import '../../css/f/f2bo9sosb.css';
import '../../css/u/uyskbz6th.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dofvcxtap"/><path class="lh2837xdo"/><path class="wjgxo22lf"/><path class="cyjkowbcs"/><path class="oi9wkvb_a"/><path class="ji68z_b4b"/><path class="zt50sebuf"/><path class="ea4rlcbbs"/><path class="f2bo9sosb"/><path class="uyskbz6th"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:microsoftgraph"} {...others} />);
}

export default Component;
