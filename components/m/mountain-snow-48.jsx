import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slbli-wlk.css';
import '../../css/t/tys-9ybqc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="slbli-wlk"/><path class="tys-9ybqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mountain-snow-48"} {...others} />);
}

export default Component;
