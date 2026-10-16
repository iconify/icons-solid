import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m417uzbhw.css';
import '../../css/l/l0mscrdyr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m417uzbhw"/><path class="l0mscrdyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smartphone-charging-20"} {...others} />);
}

export default Component;
