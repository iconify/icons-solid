import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0_c1_bxh.css';
import '../../css/k/k3qzk_6hq.css';
import '../../css/m/manc0kbni.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c0_c1_bxh"/><path clip-rule="evenodd" class="k3qzk_6hq"/><path class="manc0kbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:projector-board-flat"} {...others} />);
}

export default Component;
