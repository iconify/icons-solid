import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg5o3i7gs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zg5o3i7gs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tabletop-microphone-under-gabled-roof"} {...others} />);
}

export default Component;
