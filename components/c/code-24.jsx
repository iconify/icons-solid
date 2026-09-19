import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-gbxsb2v.css';
import '../../css/e/ezh7gspyc.css';
import '../../css/v/v4e6rhbkp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVG4YiPUbQM)" class="m-gbxsb2v"/><defs><linearGradient id="SVG4YiPUbQM" x1="2.588" x2="20.693" y1="2.933" y2="22.309" gradientUnits="userSpaceOnUse"><stop class="ezh7gspyc"/><stop offset="1" class="v4e6rhbkp"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:code-24"} {...others} />);
}

export default Component;
