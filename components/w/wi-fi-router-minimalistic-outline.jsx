import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odo2x7s2w.css';
import '../../css/q/qeh1rda9f.css';
import '../../css/j/j12wdzb5f.css';
import '../../css/n/nowz9vacl.css';
import '../../css/h/h-3wj0b9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="odo2x7s2w"/><path class="qeh1rda9f"/><path class="j12wdzb5f"/><path class="nowz9vacl"/><path clip-rule="evenodd" class="h-3wj0b9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-minimalistic-outline"} {...others} />);
}

export default Component;
