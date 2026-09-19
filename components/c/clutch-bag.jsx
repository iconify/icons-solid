import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxhtvibdw.css';
import '../../css/o/o_lv49bdx.css';
import '../../css/q/qkuxb2bmr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dxhtvibdw"/><path class="o_lv49bdx"/><path class="qkuxb2bmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:clutch-bag"} {...others} />);
}

export default Component;
