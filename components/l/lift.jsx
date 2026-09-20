import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gc5sxnbxh.css';
import '../../css/d/dr6f5yw6o.css';
import '../../css/f/fqvcaxw9b.css';
import '../../css/y/yxw0pjecr.css';
import '../../css/w/wjjz3l2or.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gc5sxnbxh"/><path class="dr6f5yw6o"/><path class="fqvcaxw9b"/><path class="yxw0pjecr"/><path class="wjjz3l2or"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:lift"} {...others} />);
}

export default Component;
