import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p69oc7ijo.css';

const viewBox = {"width":384,"height":432};
const content = `<path class="p69oc7ijo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:calendar-check"} {...others} />);
}

export default Component;
