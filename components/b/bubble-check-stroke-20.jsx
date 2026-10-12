import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esw9xfprr.css';
import '../../css/v/vo4v1ibev.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="esw9xfprr"/><path class="vo4v1ibev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bubble-check-stroke-20"} {...others} />);
}

export default Component;
