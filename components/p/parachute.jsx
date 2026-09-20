import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfi07vzgy.css';
import '../../css/p/p7qmddnjg.css';
import '../../css/s/sx8oggdyo.css';
import '../../css/l/l4aio9xnb.css';
import '../../css/a/alxpecbej.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/dcfoh8whk.css';
import '../../css/v/vm_qoyk3z.css';
import '../../css/h/hfyqtcbbe.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lfi07vzgy"/><path class="p7qmddnjg"/><path class="sx8oggdyo"/><path class="l4aio9xnb"/><rect class="alxpecbej"/><g class="jn8qy4bru"><path class="dcfoh8whk"/><path class="vm_qoyk3z"/><path class="hfyqtcbbe"/><rect class="alxpecbej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:parachute"} {...others} />);
}

export default Component;
