import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u7c-qacyz.css';
import '../../css/m/mhmnx3bse.css';
import '../../css/x/xewy-x6xy.css';
import '../../css/b/b151ecb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="u7c-qacyz"/><path class="mhmnx3bse wm-a"/><path class="wm-a xewy-x6xy"/><path class="b151ecb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:medal-duo"} {...others} />);
}

export default Component;
