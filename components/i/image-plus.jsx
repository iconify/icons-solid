import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d83wn677s.css';
import '../../css/y/y4r4x_bib.css';
import '../../css/m/mb867oblv.css';
import '../../css/f/fbkd1nm7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d83wn677s"/><circle class="y4r4x_bib"/><path class="mb867oblv"/><path class="fbkd1nm7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-plus"} {...others} />);
}

export default Component;
