import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o7dafxbyv.css';
import '../../css/w/w7sg7srhp.css';
import '../../css/e/e_5r6zbgz.css';
import '../../css/n/nijapbwkt.css';
import '../../css/c/chy-6cb0m.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o7dafxbyv"/><path class="w7sg7srhp"/><path clip-rule="evenodd" class="e_5r6zbgz"/><path clip-rule="evenodd" class="nijapbwkt"/><path clip-rule="evenodd" class="chy-6cb0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:question-circle-print"} {...others} />);
}

export default Component;
