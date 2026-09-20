import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igjudsbww.css';
import '../../css/p/po5wmcbse.css';
import '../../css/w/wwtks_b8v.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGK4au95sq"><g class="igjudsbww"><path class="po5wmcbse"/><path class="wwtks_b8v"/></g></mask></defs><path mask="url(#SVGK4au95sq)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:jump-time-duotone-line"} {...others} />);
}

export default Component;
