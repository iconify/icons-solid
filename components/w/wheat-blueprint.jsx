import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z5xnrgtsv.css';
import '../../css/g/gcwkl5bcj.css';
import '../../css/q/q2afrlb6o.css';
import '../../css/k/kjgpvobgb.css';
import '../../css/h/h0tj1xbrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco z5xnrgtsv"/><path class="gcwkl5bcj wm-deco"/><path class="q2afrlb6o wm-deco"/><path class="kjgpvobgb"/><path class="h0tj1xbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wheat-blueprint"} {...others} />);
}

export default Component;
