import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxl7f5q3q.css';
import '../../css/m/m-_748b1i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vxl7f5q3q"/><path clip-rule="evenodd" class="m-_748b1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:text-editor-16"} {...others} />);
}

export default Component;
