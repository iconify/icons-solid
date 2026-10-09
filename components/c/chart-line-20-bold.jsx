import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oejyfcccr.css';
import '../../css/z/zv_mybbhp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oejyfcccr"/><path class="zv_mybbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-line-20-bold"} {...others} />);
}

export default Component;
