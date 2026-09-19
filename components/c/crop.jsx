import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j8nq_lbrx.css';
import '../../css/k/k_gt2zl8v.css';
import '../../css/a/a7yj9abhm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="j8nq_lbrx"/><path class="k_gt2zl8v"/><path class="a7yj9abhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:crop"} {...others} />);
}

export default Component;
