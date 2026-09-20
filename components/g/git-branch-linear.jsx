import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/if7b_fg1p.css';
import '../../css/o/oreif5bgc.css';
import '../../css/v/vcufaui4b.css';
import '../../css/d/dm7s30bzj.css';
import '../../css/n/ny0oyikol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="if7b_fg1p"/><path class="oreif5bgc"/><path class="vcufaui4b"/><path class="dm7s30bzj"/><path class="ny0oyikol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-branch-linear"} {...others} />);
}

export default Component;
