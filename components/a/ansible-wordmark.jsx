import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x120vrb5q.css';
import '../../css/t/tl5abbc0w.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="x120vrb5q"/><path class="tl5abbc0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:ansible-wordmark"} {...others} />);
}

export default Component;
