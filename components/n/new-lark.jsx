import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzxdflb5t.css';
import '../../css/e/e-0l_rb_w.css';
import '../../css/f/fuhvn-u-b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qzxdflb5t"/><path class="e-0l_rb_w"/><path class="fuhvn-u-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:new-lark"} {...others} />);
}

export default Component;
