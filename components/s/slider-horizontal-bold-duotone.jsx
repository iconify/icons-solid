import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7_x8abzz.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/hroj_xbvp.css';
import '../../css/q/qk-cax30a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b7_x8abzz"/><g class="xtpeb-edw"><path class="hroj_xbvp"/><path class="qk-cax30a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-horizontal-bold-duotone"} {...others} />);
}

export default Component;
