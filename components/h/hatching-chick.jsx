import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4f8vkb9x.css';
import '../../css/e/ejb_j_w_o.css';
import '../../css/t/tzgjcxbbf.css';
import '../../css/c/cvvwee2xa.css';
import '../../css/f/fg675xbjg.css';
import '../../css/x/xk761l73s.css';
import '../../css/q/q3wgo_bwi.css';
import '../../css/z/z7t7racog.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g4f8vkb9x"/><path class="ejb_j_w_o"/><path class="tzgjcxbbf"/><path class="cvvwee2xa"/><circle class="fg675xbjg"/><circle class="xk761l73s"/><path class="q3wgo_bwi"/><path class="z7t7racog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hatching-chick"} {...others} />);
}

export default Component;
