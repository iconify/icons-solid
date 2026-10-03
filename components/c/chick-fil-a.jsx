import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxhb_hb3z.css';
import '../../css/x/x071t2b9k.css';
import '../../css/z/zoy36xbhx.css';

const viewBox = {"width":581.995,"height":263.112};
const content = `<g class="xxhb_hb3z"><path class="x071t2b9k"/><path class="zoy36xbhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:chick-fil-a"} {...others} />);
}

export default Component;
