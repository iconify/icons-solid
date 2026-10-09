import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_hiasb3j.css';
import '../../css/z/zme2kfuvy.css';
import '../../css/j/joilwmbfp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i_hiasb3j"/><path class="zme2kfuvy"/><path class="joilwmbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cement-plant-20-bold"} {...others} />);
}

export default Component;
