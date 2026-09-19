import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wblo352dq.css';
import '../../css/a/afjkbrlmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b wblo352dq"/><path class="afjkbrlmd b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:clerk"} {...others} />);
}

export default Component;
