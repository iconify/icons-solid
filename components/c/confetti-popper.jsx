import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wejxd_eqp.css';
import '../../css/x/xzns0opjq.css';
import '../../css/p/p58o-0s4f.css';
import '../../css/w/w2t408urq.css';
import '../../css/d/dv2qevypp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wejxd_eqp"/><path class="xzns0opjq"/><path class="p58o-0s4f"/><path class="w2t408urq"/><path class="dv2qevypp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:confetti-popper"} {...others} />);
}

export default Component;
