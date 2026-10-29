import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkhsecbor.css';
import '../../css/d/dbnvn5bfv.css';
import '../../css/p/ptyjhmtcq.css';
import '../../css/g/go588nr-m.css';
import '../../css/d/d9e15lbcr.css';
import '../../css/k/ksjus26wq.css';
import '../../css/p/pby63ubec.css';
import '../../css/b/b7r6yrbhw.css';
import '../../css/i/i1b_9tpdo.css';
import '../../css/n/negys3btd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fkhsecbor wm-shadow"/><path class="dbnvn5bfv wm-k"/><path class="ptyjhmtcq wm-k"/><path class="go588nr-m wm-k"/><path class="d9e15lbcr wm-k"/><path class="ksjus26wq wm-k"/><path class="pby63ubec wm-shine"/><path class="b7r6yrbhw wm-a"/><path class="i1b_9tpdo wm-a"/><path class="negys3btd wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:shopping-basket"} {...others} />);
}

export default Component;
