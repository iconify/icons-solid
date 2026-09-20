import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uzxb7dbfi.css';
import '../../css/z/zdg-6l18t.css';
import '../../css/v/vuzzriqjj.css';
import '../../css/a/a_22u3byu.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uzxb7dbfi"/><path class="zdg-6l18t"/><path class="vuzzriqjj"/><path class="a_22u3byu"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:clipboard-check-circled-circle"} {...others} />);
}

export default Component;
