import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zes8_9b5q.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="zes8_9b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:first-aid"} {...others} />);
}

export default Component;
