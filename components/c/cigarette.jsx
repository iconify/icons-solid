import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4o3fs57g.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="j4o3fs57g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:cigarette"} {...others} />);
}

export default Component;
