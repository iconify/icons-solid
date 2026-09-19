import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/axcbjwqzp.css';
import '../../css/b/bwio8qbtt.css';
import '../../css/z/zlavaxbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="axcbjwqzp"/><path class="bwio8qbtt"/><path class="zlavaxbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-rotation-clockwise"} {...others} />);
}

export default Component;
