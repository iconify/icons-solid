import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/el1rzocfz.css';
import '../../css/e/eb2qabupy.css';
import '../../css/y/y4erujgcb.css';
import '../../css/q/qffe8c_yi.css';
import '../../css/x/xhl_tfn7d.css';
import '../../css/z/zotfi3dhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="el1rzocfz wm-deco"/><path class="eb2qabupy wm-deco"/><path class="wm-k y4erujgcb"/><path class="qffe8c_yi wm-a"/><path class="wm-k xhl_tfn7d"/><path class="wm-a zotfi3dhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:corner-up-left-blueprint"} {...others} />);
}

export default Component;
