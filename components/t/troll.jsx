import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl7t3xhfm.css';
import '../../css/c/cdu5--xom.css';
import '../../css/e/eojsdmbis.css';
import '../../css/q/qd8w1z03w.css';
import '../../css/z/z1-x3viwx.css';
import '../../css/a/agde6rb9b.css';
import '../../css/l/lrkx0lbho.css';
import '../../css/n/nsw9vhzjn.css';
import '../../css/x/xvn5jac9a.css';
import '../../css/n/niy69-i_n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kl7t3xhfm"/><path class="cdu5--xom"/><path class="eojsdmbis"/><path class="qd8w1z03w"/><path class="z1-x3viwx"/><path class="agde6rb9b"/><path class="lrkx0lbho"/><path class="nsw9vhzjn"/><path class="xvn5jac9a"/><path class="niy69-i_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:troll"} {...others} />);
}

export default Component;
