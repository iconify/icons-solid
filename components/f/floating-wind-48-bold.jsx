import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7qdlcbcy.css';
import '../../css/k/kynfjw24x.css';
import '../../css/t/tew95inet.css';
import '../../css/d/d26csiiuk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p7qdlcbcy"/><path class="kynfjw24x"/><path class="tew95inet"/><path class="d26csiiuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:floating-wind-48-bold"} {...others} />);
}

export default Component;
