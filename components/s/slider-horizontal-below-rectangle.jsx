import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1_0dc9au.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="y1_0dc9au"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:slider-horizontal-below-rectangle"} {...others} />);
}

export default Component;
