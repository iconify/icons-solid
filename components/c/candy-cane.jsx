import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/q/qne1fi5mm.css';
import '../../css/m/m8n5clbmc.css';
import '../../css/z/z5z2sd3ck.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="qne1fi5mm"/><path class="m8n5clbmc"/><path class="z5z2sd3ck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:candy-cane"} {...others} />);
}

export default Component;
