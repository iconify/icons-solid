import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-uyx3byo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h-uyx3byo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:underline-stroke-16"} {...others} />);
}

export default Component;
