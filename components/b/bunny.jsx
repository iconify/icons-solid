import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps6n6j5jn.css';
import '../../css/t/ttigw5b6h.css';
import '../../css/e/ej8id9bze.css';
import '../../css/e/eyppoibfq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ps6n6j5jn"/><path class="ttigw5b6h"/><path class="ej8id9bze"/><path class="eyppoibfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bunny"} {...others} />);
}

export default Component;
