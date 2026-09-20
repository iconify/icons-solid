import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/u/uvefjukdp.css';
import '../../css/k/k7v7d4bzs.css';
import '../../css/n/niw1b-jxn.css';
import '../../css/z/zlu2b1b6y.css';
import '../../css/n/npv9m71la.css';
import '../../css/f/fkksm04zo.css';
import '../../css/y/y4_l99bdm.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="uvefjukdp"/><path clip-rule="evenodd" class="k7v7d4bzs"/><path clip-rule="evenodd" class="niw1b-jxn"/><path clip-rule="evenodd" class="zlu2b1b6y"/></g><path class="npv9m71la"/><path clip-rule="evenodd" class="fkksm04zo"/><path clip-rule="evenodd" class="y4_l99bdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:question"} {...others} />);
}

export default Component;
