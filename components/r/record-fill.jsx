import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfoeq1bpy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bfoeq1bpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:record-fill"} {...others} />);
}

export default Component;
