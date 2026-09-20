import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tte7b4f3i.css';
import '../../css/y/y_eo9acim.css';
import '../../css/o/oc8vs8bfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="tte7b4f3i"/><path class="y_eo9acim"/><path class="oc8vs8bfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:amusement-park-strength-meter"} {...others} />);
}

export default Component;
