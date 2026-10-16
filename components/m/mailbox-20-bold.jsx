import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjj-1pc-n.css';
import '../../css/y/ynpxxgbir.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xjj-1pc-n"/><path class="ynpxxgbir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mailbox-20-bold"} {...others} />);
}

export default Component;
