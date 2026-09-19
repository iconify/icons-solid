import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u1jwn7bvu.css';
import '../../css/p/ppq-0kb9b.css';
import '../../css/d/dg7qrmb6g.css';
import '../../css/u/ue7lx6y0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="u1jwn7bvu"/><path class="ppq-0kb9b"/><path class="dg7qrmb6g"/><path class="ue7lx6y0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-image"} {...others} />);
}

export default Component;
