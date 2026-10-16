import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5e3kibxu.css';
import '../../css/d/d2h5byb5d.css';
import '../../css/p/pqlptybrj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s5e3kibxu"/><path class="d2h5byb5d"/><path class="pqlptybrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flow-meter-48"} {...others} />);
}

export default Component;
