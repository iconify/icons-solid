import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pvp08zbpt.css';
import '../../css/x/xv24-fbig.css';
import '../../css/m/m-cmt_3ct.css';
import '../../css/g/gxz8fabbb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="pvp08zbpt"/><path class="xv24-fbig"/><path class="m-cmt_3ct"/><path class="gxz8fabbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-white-hair"} {...others} />);
}

export default Component;
