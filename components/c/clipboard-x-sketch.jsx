import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z80o90bnu.css';
import '../../css/c/c7pts9b4m.css';
import '../../css/e/e-pbxlb-r.css';
import '../../css/u/uq6pxgb_j.css';
import '../../css/c/cs2ofc7il.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="z80o90bnu"/><path class="c7pts9b4m wm-k"/><path class="e-pbxlb-r wm-a"/><path class="uq6pxgb_j wm-k"/><path class="cs2ofc7il wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clipboard-x-sketch"} {...others} />);
}

export default Component;
