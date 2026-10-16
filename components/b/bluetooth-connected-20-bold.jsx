import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3-ldu6ly.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h3-ldu6ly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bluetooth-connected-20-bold"} {...others} />);
}

export default Component;
