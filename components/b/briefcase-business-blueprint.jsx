import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/abfaitbwy.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/g/gs99q5biw.css';
import '../../css/d/dokvecbou.css';
import '../../css/n/n54uxubxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="abfaitbwy wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="gs99q5biw wm-k"/><path class="dokvecbou wm-a"/><path class="n54uxubxn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:briefcase-business-blueprint"} {...others} />);
}

export default Component;
