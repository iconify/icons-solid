import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/x/xyjtgccot.css';
import '../../css/i/ibzbys_6i.css';
import '../../css/p/pp7yv2b1c.css';
import '../../css/v/vvtzadb6p.css';
import '../../css/e/ezih4uege.css';
import '../../css/c/c2e1wb76g.css';
import '../../css/n/nemsoye5j.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><g class="xyjtgccot"><path class="ibzbys_6i"/><path class="pp7yv2b1c"/><path class="vvtzadb6p"/></g><path class="ezih4uege"/><path class="c2e1wb76g"/><path class="nemsoye5j"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:shuffle-circle"} {...others} />);
}

export default Component;
