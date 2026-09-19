import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kr3ck5bhl.css';
import '../../css/b/b41sgubvl.css';
import '../../css/j/jyezy1bma.css';
import '../../css/t/toczg3kyb.css';
import '../../css/b/bue5v0abp.css';
import '../../css/b/bm1m0ob_i.css';
import '../../css/h/hg0cgtb8l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kr3ck5bhl"/><path class="b41sgubvl"/><path class="jyezy1bma"/><path class="toczg3kyb"/><path class="bue5v0abp"/><path class="bm1m0ob_i"/><path class="hg0cgtb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:volleyball-duo"} {...others} />);
}

export default Component;
