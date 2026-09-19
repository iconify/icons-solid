import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtf_51zyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jtf_51zyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-low-vision"} {...others} />);
}

export default Component;
