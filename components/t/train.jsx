import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xq81j169i.css';
import '../../css/z/zevebvbdj.css';
import '../../css/n/n2z229bhf.css';
import '../../css/l/ly23pmblx.css';
import '../../css/g/gt402wbqt.css';
import '../../css/p/p1pntkvnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="xq81j169i"/><path class="zevebvbdj"/><path class="n2z229bhf wm-shine"/><path class="ly23pmblx wm-k"/><path class="gt402wbqt wm-a"/><path class="p1pntkvnd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:train"} {...others} />);
}

export default Component;
