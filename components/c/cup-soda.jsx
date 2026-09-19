import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/ja_r16b-t.css';
import '../../css/h/hbxhkzysn.css';
import '../../css/z/zit5rebxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ja_r16b-t"/><path class="hbxhkzysn"/><path class="zit5rebxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cup-soda"} {...others} />);
}

export default Component;
