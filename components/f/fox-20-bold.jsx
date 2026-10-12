import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjy23_bwm.css';
import '../../css/e/ex-8_4bzp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cjy23_bwm"/><path class="ex-8_4bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fox-20-bold"} {...others} />);
}

export default Component;
