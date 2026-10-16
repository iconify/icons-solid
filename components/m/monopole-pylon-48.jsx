import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-l0jd7mu.css';
import '../../css/r/rt3djzbaq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p-l0jd7mu"/><path class="rt3djzbaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monopole-pylon-48"} {...others} />);
}

export default Component;
