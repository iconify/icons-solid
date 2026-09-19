import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfysi3jfl.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="hfysi3jfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:event-tentative"} {...others} />);
}

export default Component;
