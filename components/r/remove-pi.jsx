import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v10bhlb1p.css';
import '../../css/f/f9o0vpbpo.css';
import '../../css/k/kmc74e6rd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v10bhlb1p"/><path class="f9o0vpbpo"/><path class="kmc74e6rd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:remove-pi"} {...others} />);
}

export default Component;
