import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/x/x3axod8dx.css';
import '../../css/n/n9ni32ssu.css';
import '../../css/n/ne9fj2qdw.css';
import '../../css/z/z-1zj-jjs.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="x3axod8dx"/><path clip-rule="evenodd" class="n9ni32ssu"/></g><path clip-rule="evenodd" class="ne9fj2qdw"/><path clip-rule="evenodd" class="z-1zj-jjs"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:nut-circle"} {...others} />);
}

export default Component;
