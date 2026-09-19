import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5t6vubnr.css';
import '../../css/o/ow_l13b0g.css';
import '../../css/a/ambai7ovl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="z5t6vubnr"/><path class="ow_l13b0g"/><path class="ambai7ovl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:wallet"} {...others} />);
}

export default Component;
