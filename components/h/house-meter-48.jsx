import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvggpac7z.css';
import '../../css/s/sjprxildg.css';
import '../../css/o/o0i8t4b7m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvggpac7z"/><path class="sjprxildg"/><path class="o0i8t4b7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-meter-48"} {...others} />);
}

export default Component;
