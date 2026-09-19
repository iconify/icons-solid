import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tvo3ulbme.css';
import '../../css/x/xpwwbpbtk.css';
import '../../css/e/efsv_hb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tvo3ulbme"/><path class="xpwwbpbtk"/><path class="efsv_hb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-blink-left"} {...others} />);
}

export default Component;
