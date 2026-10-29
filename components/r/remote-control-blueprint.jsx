import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uwv0wc6cy.css';
import '../../css/l/l78_ntbyf.css';
import '../../css/x/xim_sebyx.css';
import '../../css/j/jfct23bva.css';
import '../../css/w/wy4xecb3h.css';
import '../../css/a/akmrtkr0u.css';
import '../../css/e/exp-5t75r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="uwv0wc6cy wm-deco"/><path class="l78_ntbyf wm-deco"/><path class="wm-k xim_sebyx"/><path class="jfct23bva wm-a"/><path class="wm-s wy4xecb3h"/><path class="akmrtkr0u wm-a"/><path class="exp-5t75r wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:remote-control-blueprint"} {...others} />);
}

export default Component;
