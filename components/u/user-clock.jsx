import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/e5o-5eeiz.css';
import '../../css/k/k_1bsh79w.css';
import '../../css/f/flwbdztss.css';
import '../../css/i/isdq3ll-w.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/t/tvluddz9u.css';
import '../../css/h/htegukbdh.css';
import '../../css/q/qto7v8bon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="e5o-5eeiz"/><path class="k_1bsh79w wm-s"/><path class="flwbdztss"/><path class="isdq3ll-w wm-shine"/><path class="ljeitrr-k wm-k"/><path class="tvluddz9u wm-s"/><path class="htegukbdh"/><path class="qto7v8bon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:user-clock"} {...others} />);
}

export default Component;
