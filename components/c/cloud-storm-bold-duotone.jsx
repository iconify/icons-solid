import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zf0olab_z.css';
import '../../css/e/ejx2y1bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zf0olab_z"/><path class="ejx2y1bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-storm-bold-duotone"} {...others} />);
}

export default Component;
