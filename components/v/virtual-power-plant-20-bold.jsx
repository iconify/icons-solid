import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0epiybna.css';
import '../../css/f/f_x7syode.css';
import '../../css/h/hacaudf9c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o0epiybna"/><path class="f_x7syode"/><path class="hacaudf9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:virtual-power-plant-20-bold"} {...others} />);
}

export default Component;
