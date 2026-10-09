import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxnj49dbu.css';
import '../../css/p/pxuy9ccjx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uxnj49dbu"/><path class="pxuy9ccjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:excavator-20-bold"} {...others} />);
}

export default Component;
