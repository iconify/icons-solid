import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyvijplsq.css';
import '../../css/y/yoow9pgmz.css';
import '../../css/k/k-osxnv8s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iyvijplsq"/><path class="yoow9pgmz"/><path class="k-osxnv8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-9v-48-bold"} {...others} />);
}

export default Component;
