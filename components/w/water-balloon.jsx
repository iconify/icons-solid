import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0vdqdp2f.css';
import '../../css/p/pzcq6gb-s.css';
import '../../css/b/b-wj58kcb.css';
import '../../css/o/opnel4b7g.css';
import '../../css/j/jkc4wubcj.css';
import '../../css/n/nuf5i1-gx.css';
import '../../css/n/nnbcgo75e.css';
import '../../css/z/zrxlo_bfq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k0vdqdp2f wm-shadow"/><path class="pzcq6gb-s wm-k"/><path class="b-wj58kcb wm-k"/><path class="opnel4b7g wm-k"/><path class="jkc4wubcj wm-k"/><path class="nuf5i1-gx wm-k"/><path class="nnbcgo75e wm-shine"/><path class="wm-a zrxlo_bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:water-balloon"} {...others} />);
}

export default Component;
