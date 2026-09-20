import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kt0unvn3l.css';
import '../../css/c/co_6nib_w.css';
import '../../css/p/ppcbm4bhz.css';
import '../../css/m/mi9zrjb8e.css';
import '../../css/t/t1dkbtbrd.css';
import '../../css/e/ey70n1bag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kt0unvn3l"/><path class="co_6nib_w"/><path class="ppcbm4bhz"/><path class="mi9zrjb8e"/><path class="t1dkbtbrd"/><path class="ey70n1bag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:warehouse-2"} {...others} />);
}

export default Component;
