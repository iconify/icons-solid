import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuaue1bpz.css';
import '../../css/v/vak_6b11a.css';
import '../../css/z/zz86_bcsi.css';
import '../../css/b/bt83j9bbv.css';
import '../../css/p/pzw5tjbow.css';
import '../../css/z/z21f3wm3m.css';
import '../../css/c/cpxlvpb8d.css';
import '../../css/c/c9unrqb9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xuaue1bpz"/><path class="vak_6b11a"/><path class="zz86_bcsi"/><path class="bt83j9bbv"/><path class="pzw5tjbow"/><path class="z21f3wm3m"/><path class="cpxlvpb8d"/><path class="c9unrqb9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:real-estate-deal-shake-building"} {...others} />);
}

export default Component;
