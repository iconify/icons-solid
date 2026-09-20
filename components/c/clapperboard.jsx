import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/o/o-qyhl7tj.css';
import '../../css/d/db32f0bpl.css';
import '../../css/o/oz86ahbpf.css';
import '../../css/l/lnu3hcbkj.css';
import '../../css/l/l1xsc56yw.css';
import '../../css/c/cx0cjltji.css';
import '../../css/s/sq6x6abjw.css';
import '../../css/n/n4fm-mbjn.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="o-qyhl7tj"/><path clip-rule="evenodd" class="db32f0bpl"/><path class="oz86ahbpf"/><path clip-rule="evenodd" class="lnu3hcbkj"/></g><path clip-rule="evenodd" class="l1xsc56yw"/><path clip-rule="evenodd" class="cx0cjltji"/><path clip-rule="evenodd" class="sq6x6abjw"/><path clip-rule="evenodd" class="n4fm-mbjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:clapperboard"} {...others} />);
}

export default Component;
