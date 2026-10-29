import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sknes5mjt.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/m/mebxeyt4k.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/s/sr7nadcag.css';
import '../../css/o/oao2m3bzy.css';
import '../../css/y/ye2nncc6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sknes5mjt wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="mebxeyt4k wm-k"/><path class="wm-a wqb-0n4qk"/><path class="sr7nadcag wm-s"/><path class="oao2m3bzy wm-k"/><path class="wm-s ye2nncc6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-x-blueprint"} {...others} />);
}

export default Component;
