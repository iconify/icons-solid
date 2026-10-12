import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_h-nlbdg.css';
import '../../css/z/zptnbdbhi.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/r/r7ha9dzwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j_h-nlbdg"/><path class="zptnbdbhi"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="r7ha9dzwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:money-plus"} {...others} />);
}

export default Component;
