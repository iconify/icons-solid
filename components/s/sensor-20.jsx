import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyzben50c.css';
import '../../css/y/ylpvizbha.css';
import '../../css/a/atgoxpbsa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uyzben50c"/><path class="ylpvizbha"/><path class="atgoxpbsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sensor-20"} {...others} />);
}

export default Component;
