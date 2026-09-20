import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z_vk08bfm.css';
import '../../css/j/jx05nhb6j.css';
import '../../css/m/m-i-p4irg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="z_vk08bfm"/><path class="jx05nhb6j"/><path class="m-i-p4irg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:disability-partially-blind"} {...others} />);
}

export default Component;
