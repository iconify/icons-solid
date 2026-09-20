import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rln_3myxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rln_3myxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:crosshair-2-line"} {...others} />);
}

export default Component;
