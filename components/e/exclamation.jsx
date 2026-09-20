import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/d/d61vvvu4y.css';
import '../../css/y/ykjxqgyfx.css';
import '../../css/m/m5es72bon.css';
import '../../css/a/a6vc22b0k.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="d61vvvu4y"/><path class="ykjxqgyfx"/></g><path clip-rule="evenodd" class="m5es72bon"/><path class="a6vc22b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:exclamation"} {...others} />);
}

export default Component;
