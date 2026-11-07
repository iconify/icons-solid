import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3eq_dbci.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/uv-otpbcn.css';
import '../../css/m/mhsc17o4r.css';
import '../../css/l/l63r2cc5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l3eq_dbci"/><g class="xtpeb-edw"><path class="uv-otpbcn"/><path class="mhsc17o4r"/><path class="l63r2cc5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-vertical-bold-duotone"} {...others} />);
}

export default Component;
