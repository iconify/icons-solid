import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly1cq7tta.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="ly1cq7tta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:instagramfour"} {...others} />);
}

export default Component;
