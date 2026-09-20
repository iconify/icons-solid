import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chq-8hbtu.css';
import '../../css/d/dhojt3ojp.css';
import '../../css/m/mapr2ly_z.css';
import '../../css/z/z_p5apaok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="chq-8hbtu"/><path class="dhojt3ojp"/><path class="mapr2ly_z"/><path class="z_p5apaok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:airplane-departure-cancel"} {...others} />);
}

export default Component;
