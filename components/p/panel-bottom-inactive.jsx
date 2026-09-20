import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu4l0sb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zu4l0sb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:panel-bottom-inactive"} {...others} />);
}

export default Component;
