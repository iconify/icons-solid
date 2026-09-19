import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqo3t7f7v.css';
import '../../css/u/uww4np3_w.css';
import '../../css/z/zs4vfybts.css';
import '../../css/z/z7lg6abss.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wqo3t7f7v"/><path class="uww4np3_w"/><path class="zs4vfybts"/><path class="z7lg6abss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:turtle"} {...others} />);
}

export default Component;
