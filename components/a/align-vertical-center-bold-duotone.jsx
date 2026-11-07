import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct5n7lppx.css';
import '../../css/t/tcjfwpbur.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mmptx5xgp.css';
import '../../css/r/r2btzyb3k.css';
import '../../css/c/cfzoe278o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ct5n7lppx"/><path class="tcjfwpbur"/><g class="xtpeb-edw"><path class="mmptx5xgp"/><path class="r2btzyb3k"/><path class="cfzoe278o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-vertical-center-bold-duotone"} {...others} />);
}

export default Component;
