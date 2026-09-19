import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/k/kqvstq_te.css';
import '../../css/j/jxo6gkyex.css';
import '../../css/n/ng_is0lis.css';
import '../../css/y/yqhdv_6tc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="kqvstq_te"/><path class="jxo6gkyex"/><path class="ng_is0lis"/><path class="yqhdv_6tc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bytedance"} {...others} />);
}

export default Component;
