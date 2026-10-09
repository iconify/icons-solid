import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2dd3q7hq.css';
import '../../css/m/msgtlpbua.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w2dd3q7hq"/><path class="msgtlpbua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rewind-20"} {...others} />);
}

export default Component;
