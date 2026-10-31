import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z9_d9rblc.css';
import '../../css/z/zre_4ebfh.css';
import '../../css/l/l83cxjbxw.css';
import '../../css/p/pb0bn199b.css';
import '../../css/i/i0yqkbc3h.css';
import '../../css/w/wagk4ab0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z9_d9rblc"/><path class="wm-shadow zre_4ebfh"/><path class="l83cxjbxw"/><path class="pb0bn199b"/><path class="i0yqkbc3h"/><path class="wagk4ab0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mithai-box"} {...others} />);
}

export default Component;
