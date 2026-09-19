import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/h/hz1t-jbqb.css';
import '../../css/y/y_1dp_3-h.css';
import '../../css/r/r6lr8tbvx.css';
import '../../css/l/lb_ecrc3y.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="hz1t-jbqb"/><path clip-rule="evenodd" class="y_1dp_3-h"/></g><path clip-rule="evenodd" class="r6lr8tbvx"/><path clip-rule="evenodd" class="lb_ecrc3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:flag2-print"} {...others} />);
}

export default Component;
