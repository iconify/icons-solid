import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xyv1xc2yo.css';
import '../../css/w/wybughb7e.css';
import '../../css/f/fg888oqwi.css';
import '../../css/m/mm-agpb9d.css';
import '../../css/z/zzhj-rjdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xyv1xc2yo"/><path class="wm-shadow wybughb7e"/><path class="fg888oqwi"/><path class="mm-agpb9d"/><path class="zzhj-rjdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:hard-hat"} {...others} />);
}

export default Component;
