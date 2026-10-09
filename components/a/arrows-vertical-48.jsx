import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rx1d-z-yo.css';
import '../../css/g/gvnofzq5q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rx1d-z-yo"/><path class="gvnofzq5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrows-vertical-48"} {...others} />);
}

export default Component;
