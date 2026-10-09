import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/t/tztl1qkjz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="tztl1qkjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clock-9-20"} {...others} />);
}

export default Component;
