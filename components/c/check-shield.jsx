import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-8h0w5qm.css';
import '../../css/e/emzr68bxo.css';
import '../../css/z/z_x67obuj.css';
import '../../css/q/qsjil_boq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g-8h0w5qm"/><path class="emzr68bxo"/><path class="z_x67obuj"/><path class="qsjil_boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:check-shield"} {...others} />);
}

export default Component;
