import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkv2srbts.css';
import '../../css/g/g47xhxbse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wkv2srbts"/><path clip-rule="evenodd" class="g47xhxbse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wheel-angle-bold"} {...others} />);
}

export default Component;
