import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8u2_dbcs.css';
import '../../css/l/lcxos_xok.css';
import '../../css/g/gpt06qbnz.css';
import '../../css/p/px2ac0fup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n8u2_dbcs"/><path class="lcxos_xok"/><path class="gpt06qbnz"/><path class="px2ac0fup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:trousers"} {...others} />);
}

export default Component;
