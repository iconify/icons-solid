import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbqohkbac.css';
import '../../css/x/x1ybqzb8g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tbqohkbac"/><path class="x1ybqzb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bag-handle-outline"} {...others} />);
}

export default Component;
