import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr-yqlb9c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lr-yqlb9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rotate-clockwise-alt-filled"} {...others} />);
}

export default Component;
