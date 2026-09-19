import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfqk1vksr.css';

const viewBox = {"width":256,"height":256};
const content = `<path clip-rule="evenodd" class="xfqk1vksr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-reaper"} {...others} />);
}

export default Component;
