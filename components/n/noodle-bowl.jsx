import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i73l00gnx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="i73l00gnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:noodle-bowl"} {...others} />);
}

export default Component;
