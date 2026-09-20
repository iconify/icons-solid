import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/to1w_vb_c.css';
import '../../css/n/nnax-acty.css';
import '../../css/p/p4fncyb8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="to1w_vb_c"/><path class="nnax-acty"/><path class="p4fncyb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:phone-retro-1"} {...others} />);
}

export default Component;
