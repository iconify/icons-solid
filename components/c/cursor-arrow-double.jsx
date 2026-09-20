import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-9njukan.css';
import '../../css/z/zrg8eqs-k.css';
import '../../css/t/t673_szhp.css';
import '../../css/b/bly4s_ote.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n-9njukan"/><path class="zrg8eqs-k"/><path class="t673_szhp"/><path class="bly4s_ote"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cursor-arrow-double"} {...others} />);
}

export default Component;
