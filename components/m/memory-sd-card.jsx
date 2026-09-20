import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oe5p9oluz.css';
import '../../css/k/kl_0gnbjt.css';
import '../../css/o/omvblxb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="oe5p9oluz"/><path class="kl_0gnbjt"/><path class="omvblxb5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:memory-sd-card"} {...others} />);
}

export default Component;
