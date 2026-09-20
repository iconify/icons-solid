import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei4o_1bjg.css';
import '../../css/c/chk68rb-p.css';
import '../../css/k/kr57occ3n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ei4o_1bjg"/><path class="chk68rb-p"/><path clip-rule="evenodd" class="kr57occ3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bill-4-flat"} {...others} />);
}

export default Component;
