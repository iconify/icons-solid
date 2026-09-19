import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt7_occ3g.css';
import '../../css/w/ww0tkqswg.css';
import '../../css/t/ta43r4_wu.css';
import '../../css/g/gkb4t6bpj.css';
import '../../css/c/cxxdn7won.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vt7_occ3g"/><path class="ww0tkqswg"/><path class="ta43r4_wu"/><path class="gkb4t6bpj"/><path class="cxxdn7won"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rollercoaster"} {...others} />);
}

export default Component;
