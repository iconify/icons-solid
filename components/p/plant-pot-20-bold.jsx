import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shrshrltt.css';
import '../../css/j/jqow3gbkz.css';
import '../../css/e/euu9n8cdz.css';
import '../../css/x/x_1wshpcv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="shrshrltt"/><path class="jqow3gbkz"/><path class="euu9n8cdz"/><path class="x_1wshpcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plant-pot-20-bold"} {...others} />);
}

export default Component;
