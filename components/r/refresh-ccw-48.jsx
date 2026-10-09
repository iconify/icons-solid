import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn8iwfgiz.css';
import '../../css/e/ey8dz-b1l.css';
import '../../css/y/y1198cbkx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gn8iwfgiz"/><path class="ey8dz-b1l"/><path class="y1198cbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-ccw-48"} {...others} />);
}

export default Component;
