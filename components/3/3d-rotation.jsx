import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unhju1fpv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="unhju1fpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:3d-rotation"} {...others} />);
}

export default Component;
