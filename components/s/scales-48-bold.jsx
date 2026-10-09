import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fram0bcsw.css';
import '../../css/o/oz54tcchs.css';
import '../../css/d/d4o8lobkk.css';
import '../../css/u/ux_xktusc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fram0bcsw"/><path class="oz54tcchs"/><path class="d4o8lobkk"/><path class="ux_xktusc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scales-48-bold"} {...others} />);
}

export default Component;
