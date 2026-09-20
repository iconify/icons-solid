import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/erjvk0bmc.css';
import '../../css/k/k2e__fuki.css';
import '../../css/i/i9fx_71ve.css';
import '../../css/d/dorrxzhyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="erjvk0bmc"/><path class="k2e__fuki"/><path class="i9fx_71ve"/><path class="dorrxzhyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:earpods-true-wireless"} {...others} />);
}

export default Component;
