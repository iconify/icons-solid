import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cbu65tf2h.css';
import '../../css/a/a4dn3nbkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cbu65tf2h"/><path class="a4dn3nbkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:creative-market"} {...others} />);
}

export default Component;
