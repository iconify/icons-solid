import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dif6l3b3v.css';
import '../../css/z/z_lvdcbvt.css';
import '../../css/t/t218te2ox.css';
import '../../css/w/w5e41ybud.css';
import '../../css/r/r0v6itbzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="dif6l3b3v wm-deco"/><path class="wm-deco z_lvdcbvt"/><path class="t218te2ox wm-deco"/><path class="w5e41ybud wm-k"/><path class="r0v6itbzy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:headphones-blueprint"} {...others} />);
}

export default Component;
