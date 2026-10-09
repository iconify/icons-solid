import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8q6kzbna.css';
import '../../css/a/a25ffhnff.css';
import '../../css/o/o3vxjxbdl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m8q6kzbna"/><path class="a25ffhnff"/><path class="o3vxjxbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-round-48"} {...others} />);
}

export default Component;
