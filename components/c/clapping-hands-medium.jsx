import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyj_b1zxx.css';
import '../../css/o/o0x38t9mt.css';
import '../../css/x/xtr-3pbkh.css';
import '../../css/y/yuz75hb5q.css';
import '../../css/n/nnr4lzb9o.css';
import '../../css/c/cfx1q448n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="uyj_b1zxx"/><path class="o0x38t9mt"/><path class="xtr-3pbkh"/><path class="yuz75hb5q"/><path class="nnr4lzb9o"/><path class="cfx1q448n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:clapping-hands-medium"} {...others} />);
}

export default Component;
