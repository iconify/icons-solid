import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jd4th7fko.css';
import '../../css/k/ky9zsxfhv.css';
import '../../css/v/v6_xh9r3g.css';
import '../../css/u/uj6ctbb9o.css';
import '../../css/n/nn5gvcm9k.css';
import '../../css/t/tptn_zp5q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jd4th7fko"/><path class="ky9zsxfhv"/><path class="v6_xh9r3g"/><path class="uj6ctbb9o"/><path class="nn5gvcm9k"/><path class="tptn_zp5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hibiscus"} {...others} />);
}

export default Component;
