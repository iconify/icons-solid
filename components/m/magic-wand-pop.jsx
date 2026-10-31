import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei3ecxn7v.css';
import '../../css/l/l8jhx2bwn.css';
import '../../css/m/m8fr7ezrm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ei3ecxn7v"/><path class="l8jhx2bwn"/><path class="m8fr7ezrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:magic-wand-pop"} {...others} />);
}

export default Component;
