import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tjyng8iib.css';
import '../../css/z/z7qz8pbpc.css';
import '../../css/m/mnfeitrok.css';
import '../../css/j/jvpslgbsc.css';
import '../../css/w/wh0zujbon.css';
import '../../css/s/swjvgl4kp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="tjyng8iib wm-deco"/><path class="wm-deco z7qz8pbpc"/><path class="mnfeitrok wm-deco"/><path class="jvpslgbsc wm-k"/><path class="wh0zujbon wm-a"/><path class="swjvgl4kp wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:eye-blueprint"} {...others} />);
}

export default Component;
