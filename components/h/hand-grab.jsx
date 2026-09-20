import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/g/gl1k5hr6v.css';
import '../../css/m/ml6dupy2r.css';
import '../../css/k/k4t3lsbvd.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="gl1k5hr6v"/><path class="ml6dupy2r"/></g><path clip-rule="evenodd" class="k4t3lsbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:hand-grab"} {...others} />);
}

export default Component;
