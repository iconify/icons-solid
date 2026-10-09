import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zncj9xbho.css';
import '../../css/j/j2czn_mgh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zncj9xbho"/><path class="j2czn_mgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermal-camera-48"} {...others} />);
}

export default Component;
