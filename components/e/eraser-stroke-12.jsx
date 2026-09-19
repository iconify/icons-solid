import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxg8f6bqm.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="cxg8f6bqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:eraser-stroke-12"} {...others} />);
}

export default Component;
