import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgs6dobqh.css';
import '../../css/o/o1usrlbra.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rgs6dobqh"/><path class="o1usrlbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pier-20"} {...others} />);
}

export default Component;
