import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wzbdtzo8g.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/f/fb1ki3bup.css';
import '../../css/f/fmvl9jb-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco wzbdtzo8g"/><path class="sdaucgb_l wm-deco"/><path class="fb1ki3bup wm-k"/><path class="fmvl9jb-y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:refrigerator-blueprint"} {...others} />);
}

export default Component;
