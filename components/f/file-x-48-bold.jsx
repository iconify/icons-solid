import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdos38jip.css';
import '../../css/r/r7ul0pb7v.css';
import '../../css/h/h_6x60xma.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pdos38jip"/><path class="r7ul0pb7v"/><path class="h_6x60xma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-x-48-bold"} {...others} />);
}

export default Component;
