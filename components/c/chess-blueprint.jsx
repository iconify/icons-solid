import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/htdq6cc4t.css';
import '../../css/o/oaeosk-ai.css';
import '../../css/g/gfhi6c-ut.css';
import '../../css/t/tfxmz8b0m.css';
import '../../css/x/xck8kdj3v.css';
import '../../css/l/lkodhclgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="htdq6cc4t wm-deco"/><path class="oaeosk-ai wm-deco"/><path class="gfhi6c-ut wm-deco"/><path class="tfxmz8b0m wm-k"/><path class="wm-a xck8kdj3v"/><path class="lkodhclgb wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chess-blueprint"} {...others} />);
}

export default Component;
