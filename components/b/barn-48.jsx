import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj9xljt8w.css';
import '../../css/w/whkrpe4se.css';
import '../../css/x/x00dth-_f.css';
import '../../css/q/qkqutfb3d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zj9xljt8w"/><path class="whkrpe4se"/><path class="x00dth-_f"/><path class="qkqutfb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:barn-48"} {...others} />);
}

export default Component;
