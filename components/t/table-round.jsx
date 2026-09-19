import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g5d36ybqm.css';
import '../../css/n/nm32_xbfm.css';
import '../../css/f/fcgvesbjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><ellipse class="g5d36ybqm"/><path class="nm32_xbfm"/><path class="fcgvesbjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:table-round"} {...others} />);
}

export default Component;
