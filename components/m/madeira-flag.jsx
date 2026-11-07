import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcpth-wqs.css';
import '../../css/f/fxatayb4m.css';
import '../../css/v/v-w0-v66t.css';
import '../../css/p/phcemoujn.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wcpth-wqs"/><path class="fxatayb4m"/><path class="v-w0-v66t"/><path class="phcemoujn"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:madeira-flag"} {...others} />);
}

export default Component;
