import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o84rn3bvm.css';
import '../../css/n/nbj9xhbai.css';
import '../../css/w/w742qcbke.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o84rn3bvm"/><path class="nbj9xhbai"/><path class="w742qcbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lidar-48"} {...others} />);
}

export default Component;
