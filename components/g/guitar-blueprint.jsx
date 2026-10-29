import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jco273hcj.css';
import '../../css/z/zbmrop1yu.css';
import '../../css/y/yjrsjrbze.css';
import '../../css/u/uitsqebbd.css';
import '../../css/l/lbi3uqb8i.css';
import '../../css/d/dmq8488ic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jco273hcj wm-deco"/><path class="wm-deco zbmrop1yu"/><path class="wm-deco yjrsjrbze"/><path class="uitsqebbd wm-k"/><path class="lbi3uqb8i wm-a"/><path class="dmq8488ic wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:guitar-blueprint"} {...others} />);
}

export default Component;
