import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4f3d0b8s.css';

const viewBox = {"width":1024,"height":1025};
const content = `<path class="j4f3d0b8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:bag"} {...others} />);
}

export default Component;
