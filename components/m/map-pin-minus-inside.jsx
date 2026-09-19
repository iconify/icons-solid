import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xks785bjg.css';
import '../../css/p/pjmblnzxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xks785bjg"/><path class="pjmblnzxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:map-pin-minus-inside"} {...others} />);
}

export default Component;
