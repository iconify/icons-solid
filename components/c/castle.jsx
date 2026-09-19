import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xglseobcr.css';
import '../../css/j/j6_pxzbzu.css';
import '../../css/j/jfomtzaau.css';
import '../../css/k/k9ax1odmq.css';
import '../../css/k/k22fi-b6t.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xglseobcr"/><path class="j6_pxzbzu"/><path class="jfomtzaau"/><path class="k9ax1odmq"/><path class="k22fi-b6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:castle"} {...others} />);
}

export default Component;
