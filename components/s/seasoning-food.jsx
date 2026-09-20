import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z74lq3bsb.css';
import '../../css/d/dfu1l047n.css';
import '../../css/i/icqxk6bmp.css';
import '../../css/x/xz0s7fbsg.css';
import '../../css/x/x2wx-mogz.css';
import '../../css/q/q3_d2nbtk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z74lq3bsb"/><path class="dfu1l047n"/><path class="icqxk6bmp"/><path class="xz0s7fbsg"/><path class="x2wx-mogz"/><path class="q3_d2nbtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:seasoning-food"} {...others} />);
}

export default Component;
