import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnms1mwhc.css';
import '../../css/q/qvrsviodu.css';
import '../../css/u/ug4k4k4bx.css';
import '../../css/j/jzf-3kzzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="bnms1mwhc"/><path class="qvrsviodu"/><path class="ug4k4k4bx"/><path class="jzf-3kzzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:seek-backward-five-rtl"} {...others} />);
}

export default Component;
