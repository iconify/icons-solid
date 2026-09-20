import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/j/jgyhwabuj.css';
import '../../css/g/ga8sbbcvy.css';
import '../../css/j/jyxq1sbkh.css';
import '../../css/u/uro8bvlfh.css';
import '../../css/g/gf6hfkbax.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="jgyhwabuj"/><path clip-rule="evenodd" class="ga8sbbcvy"/></g><path clip-rule="evenodd" class="jyxq1sbkh"/><path clip-rule="evenodd" class="uro8bvlfh"/><path clip-rule="evenodd" class="gf6hfkbax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:stopwatch"} {...others} />);
}

export default Component;
