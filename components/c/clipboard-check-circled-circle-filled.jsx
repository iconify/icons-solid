import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uzxb7dbfi.css';
import '../../css/z/zdg-6l18t.css';
import '../../css/v/vuzzriqjj.css';
import '../../css/a/a_22u3byu.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="uzxb7dbfi"/><path class="zdg-6l18t"/><path class="vuzzriqjj"/><path class="a_22u3byu"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:clipboard-check-circled-circle-filled"} {...others} />);
}

export default Component;
