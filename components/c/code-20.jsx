import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vwzwsotac.css';
import '../../css/w/wjnjd8-ft.css';
import '../../css/h/h-gs119sg.css';
import '../../css/e/ezh7gspyc.css';
import '../../css/v/v4e6rhbkp.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGTp1oAcAx)" class="vwzwsotac"/><path fill="url(#SVGTp1oAcAx)" class="wjnjd8-ft"/><path fill="url(#SVGTp1oAcAx)" class="h-gs119sg"/><defs><linearGradient id="SVGTp1oAcAx" x1="2" x2="19" y1="1.5" y2="18" gradientUnits="userSpaceOnUse"><stop class="ezh7gspyc"/><stop offset="1" class="v4e6rhbkp"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:code-20"} {...others} />);
}

export default Component;
