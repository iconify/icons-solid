import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pqgqkfdkl.css';
import '../../css/d/ds0r4bcxj.css';
import '../../css/u/uy4cpqw0x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="pqgqkfdkl"/><path clip-rule="evenodd" class="ds0r4bcxj"/><path class="uy4cpqw0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:credit-card-1"} {...others} />);
}

export default Component;
