import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/masewyb4j.css';
import '../../css/l/lenyg7dgs.css';
import '../../css/i/i3a9e5bfx.css';
import '../../css/z/za_ou75ti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="masewyb4j"/><path class="lenyg7dgs"/><path class="i3a9e5bfx"/><path class="za_ou75ti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:computer-device-connection"} {...others} />);
}

export default Component;
