import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lqr12dkxf.css';
import '../../css/u/u0ognac_v.css';
import '../../css/g/g46-gz07d.css';
import '../../css/d/d_y_0lfcd.css';
import '../../css/s/srbmx6fzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lqr12dkxf"/><path class="u0ognac_v"/><path class="g46-gz07d"/><path class="d_y_0lfcd"/><path class="srbmx6fzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-minimalistic-3-line-duotone"} {...others} />);
}

export default Component;
