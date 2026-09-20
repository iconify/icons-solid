import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0w2mtbgl.css';
import '../../css/t/tl1zu4bhr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e0w2mtbgl"/><path class="tl1zu4bhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:briefing"} {...others} />);
}

export default Component;
