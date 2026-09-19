import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6h1pk2wx.css';
import '../../css/k/kj5yxug5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p6h1pk2wx"/><path class="kj5yxug5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-camera-off"} {...others} />);
}

export default Component;
