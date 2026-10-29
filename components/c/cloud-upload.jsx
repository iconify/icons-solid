import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orvzbnbcy.css';
import '../../css/y/ya7p4ty_k.css';
import '../../css/o/ox16qy2kp.css';
import '../../css/q/q1qse4bbi.css';
import '../../css/a/afsskfbns.css';
import '../../css/b/bzt6_qb3z.css';
import '../../css/y/yb2xxndxr.css';
import '../../css/a/a82p2ubdw.css';
import '../../css/z/zlrdy-bod.css';
import '../../css/q/qjh4o7bsj.css';
import '../../css/v/v9fjwcb8l.css';
import '../../css/s/sze1j-w7z.css';
import '../../css/e/erc2jbbxs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="orvzbnbcy wm-shadow"/><path class="wm-k ya7p4ty_k"/><path class="ox16qy2kp wm-k"/><path class="q1qse4bbi wm-k"/><path class="afsskfbns wm-k"/><path class="bzt6_qb3z wm-shine"/><path class="wm-k yb2xxndxr"/><path class="a82p2ubdw wm-s"/><path class="wm-s zlrdy-bod"/><path class="qjh4o7bsj wm-s"/><path class="v9fjwcb8l wm-s"/><path class="sze1j-w7z wm-s"/><path class="erc2jbbxs wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:cloud-upload"} {...others} />);
}

export default Component;
