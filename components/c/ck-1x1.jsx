import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x55socblr.css';
import '../../css/k/kqj2ust1n.css';
import '../../css/t/tuoz2rmbp.css';
import '../../css/a/awlrmcc1r.css';
import '../../css/o/oz5r71bsf.css';
import '../../css/z/z5d3n1byp.css';
import '../../css/g/gvzoyzbzj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x55socblr"/><path class="kqj2ust1n"/><path class="tuoz2rmbp"/><path class="awlrmcc1r"/><path class="oz5r71bsf"/><path class="z5d3n1byp"/><path class="gvzoyzbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ck-1x1"} {...others} />);
}

export default Component;
