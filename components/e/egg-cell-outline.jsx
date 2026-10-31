import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zdumi8bzq.css';
import '../../css/b/b67rbwqyq.css';
import '../../css/z/z456bob9a.css';
import '../../css/q/q7hgb9n8f.css';
import '../../css/t/ts7s1o_is.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="zdumi8bzq"/><path clip-rule="evenodd" class="b67rbwqyq"/><path class="z456bob9a"/><path clip-rule="evenodd" class="q7hgb9n8f"/><path clip-rule="evenodd" class="ts7s1o_is"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:egg-cell-outline"} {...others} />);
}

export default Component;
