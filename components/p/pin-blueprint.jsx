import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zpovi2bxt.css';
import '../../css/y/yj3o71wvv.css';
import '../../css/i/iq5hb0bgs.css';
import '../../css/a/a8-4bvl5f.css';
import '../../css/d/di2yqlbfe.css';
import '../../css/c/cqizbxscc.css';
import '../../css/g/gshpmob8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zpovi2bxt"/><path class="wm-deco yj3o71wvv"/><path class="iq5hb0bgs wm-deco"/><path class="a8-4bvl5f wm-k"/><path class="di2yqlbfe wm-a"/><path class="cqizbxscc wm-k"/><path class="gshpmob8r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pin-blueprint"} {...others} />);
}

export default Component;
