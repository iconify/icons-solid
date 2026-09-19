import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukonh3j0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ukonh3j0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-medium-old"} {...others} />);
}

export default Component;
