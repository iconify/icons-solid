import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d456dcc0x.css';
import '../../css/z/z7g5v_12k.css';
import '../../css/m/mjyoyf4pz.css';
import '../../css/q/qk5kz1ilb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d456dcc0x"/><path class="z7g5v_12k"/><path class="mjyoyf4pz"/><path class="qk5kz1ilb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cloud-storm"} {...others} />);
}

export default Component;
