import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8grm_bir.css';
import '../../css/m/mh0v8zovj.css';
import '../../css/j/jsxzfjb0b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h8grm_bir"/><path class="mh0v8zovj"/><path class="jsxzfjb0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geothermal-plant-20-bold"} {...others} />);
}

export default Component;
