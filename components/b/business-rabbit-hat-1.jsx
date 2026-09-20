import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e17qjjsgw.css';
import '../../css/d/dd4mt6b_s.css';
import '../../css/z/zakx-8ilh.css';
import '../../css/o/ona2a9vbr.css';
import '../../css/f/f6klvx_lc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e17qjjsgw"/><path class="dd4mt6b_s"/><path class="zakx-8ilh"/><path class="ona2a9vbr"/><path class="f6klvx_lc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:business-rabbit-hat-1"} {...others} />);
}

export default Component;
