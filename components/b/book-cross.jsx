import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/syu27vuve.css';
import '../../css/z/zayp6_xeg.css';
import '../../css/w/wqcywwbum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="syu27vuve"/><path class="zayp6_xeg"/><path class="wqcywwbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-cross"} {...others} />);
}

export default Component;
