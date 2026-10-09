import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2g9qy8wl.css';
import '../../css/x/x89mfs52m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f2g9qy8wl"/><path class="x89mfs52m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bearing-48"} {...others} />);
}

export default Component;
