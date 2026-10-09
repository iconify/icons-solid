import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr5mir7zh.css';
import '../../css/c/ce8x0bd0z.css';
import '../../css/q/qb8zetrno.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kr5mir7zh"/><path class="ce8x0bd0z"/><path class="qb8zetrno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:school-48-bold"} {...others} />);
}

export default Component;
