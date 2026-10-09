import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs9-ycc5u.css';
import '../../css/j/j9e98_wlr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xs9-ycc5u"/><path class="j9e98_wlr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ticket-20"} {...others} />);
}

export default Component;
