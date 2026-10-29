import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvh4r_b8g.css';
import '../../css/d/dt926jbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qvh4r_b8g wm-k"/><path class="dt926jbqr wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:undo"} {...others} />);
}

export default Component;
