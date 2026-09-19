import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a82xcdcpa.css';

const viewBox = {"width":352,"height":512};
const content = `<path class="a82xcdcpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:mayo-hotdog"} {...others} />);
}

export default Component;
