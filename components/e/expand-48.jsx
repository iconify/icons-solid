import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf8xqzbqy.css';
import '../../css/p/pba0y-2ri.css';
import '../../css/m/m1-zbuhax.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hf8xqzbqy"/><path class="pba0y-2ri"/><path class="m1-zbuhax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:expand-48"} {...others} />);
}

export default Component;
