import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj-uuaceq.css';
import '../../css/t/ta7__44wl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kj-uuaceq"/><path class="ta7__44wl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-type2-48"} {...others} />);
}

export default Component;
