import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t80g4uv5w.css';
import '../../css/x/xtau0h03z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t80g4uv5w"/><path class="xtau0h03z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-up-20-bold"} {...others} />);
}

export default Component;
