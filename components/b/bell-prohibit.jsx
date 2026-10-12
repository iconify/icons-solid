import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq85fcbxl.css';
import '../../css/w/wnplm3jvw.css';
import '../../css/i/ihb9l6t4d.css';
import '../../css/y/yir2erbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dq85fcbxl"/><path class="wnplm3jvw"/><circle transform="rotate(90 12 10.65)" class="ihb9l6t4d"/><path class="yir2erbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bell-prohibit"} {...others} />);
}

export default Component;
