import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcwtdzb8g.css';
import '../../css/r/r8vpsobrj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xcwtdzb8g"/><path class="r8vpsobrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eraser-48"} {...others} />);
}

export default Component;
