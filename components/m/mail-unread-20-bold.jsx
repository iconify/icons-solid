import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j93dpcc-p.css';
import '../../css/t/tw_o15b8j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j93dpcc-p"/><path class="tw_o15b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-unread-20-bold"} {...others} />);
}

export default Component;
