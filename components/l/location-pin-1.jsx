import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2l26kbdi.css';
import '../../css/b/bh7sd1rky.css';
import '../../css/e/ea4owvbpl.css';
import '../../css/t/t38lk4bfc.css';
import '../../css/o/o1fiy07wj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n2l26kbdi"/><path class="bh7sd1rky"/><path class="ea4owvbpl"/><path class="t38lk4bfc"/><path class="o1fiy07wj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:location-pin-1"} {...others} />);
}

export default Component;
