import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjji9bclf.css';
import '../../css/s/shnhwhbfw.css';
import '../../css/s/stk43etdc.css';
import '../../css/u/un9n4bcth.css';
import '../../css/c/chlo42bnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xjji9bclf"/><path class="shnhwhbfw wm-deco"/><path class="stk43etdc wm-k"/><path class="un9n4bcth wm-k"/><path class="chlo42bnl wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:tent"} {...others} />);
}

export default Component;
