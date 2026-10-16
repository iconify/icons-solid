import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd76n1f0v.css';
import '../../css/f/flk8b6but.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gd76n1f0v"/><path class="flk8b6but"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:variable-resistor-20"} {...others} />);
}

export default Component;
