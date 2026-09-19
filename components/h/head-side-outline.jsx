import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k84vybbzx.css';
import '../../css/r/roow3r2cc.css';
import '../../css/l/lf34zubqx.css';
import '../../css/d/dlqac-the.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="k84vybbzx"/><path clip-rule="evenodd" class="roow3r2cc"/><path class="lf34zubqx"/><path clip-rule="evenodd" class="dlqac-the"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:head-side-outline"} {...others} />);
}

export default Component;
