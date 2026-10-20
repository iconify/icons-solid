import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r20d5fbva.css';
import '../../css/o/o08gbrx6h.css';
import '../../css/c/cvogzw0ol.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r20d5fbva"/><path class="o08gbrx6h"/><path class="cvogzw0ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:joystick-48-bold"} {...others} />);
}

export default Component;
