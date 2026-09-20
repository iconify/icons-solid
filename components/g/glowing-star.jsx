import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpt9bf_hq.css';
import '../../css/f/f32uk7b6u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fpt9bf_hq"/><path class="f32uk7b6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:glowing-star"} {...others} />);
}

export default Component;
