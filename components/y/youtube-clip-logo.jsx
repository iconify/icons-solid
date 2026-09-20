import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxzwvgijh.css';
import '../../css/u/u_cheqw4b.css';
import '../../css/p/pz7pxbbrl.css';
import '../../css/y/ylc_z_bxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dxzwvgijh"/><path class="u_cheqw4b"/><path class="pz7pxbbrl"/><path class="ylc_z_bxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:youtube-clip-logo"} {...others} />);
}

export default Component;
