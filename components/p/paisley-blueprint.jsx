import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qgxegmk8e.css';
import '../../css/o/o45l8fdzd.css';
import '../../css/s/s36rkybwm.css';
import '../../css/m/mqwqc8t2r.css';
import '../../css/q/qe6t8ub-i.css';
import '../../css/k/k8r-r3bjz.css';
import '../../css/e/evlaolbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qgxegmk8e wm-deco"/><path class="o45l8fdzd wm-deco"/><path class="s36rkybwm wm-deco"/><path class="mqwqc8t2r wm-k"/><path class="qe6t8ub-i wm-a"/><path class="k8r-r3bjz wm-s"/><path class="evlaolbwo wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paisley-blueprint"} {...others} />);
}

export default Component;
