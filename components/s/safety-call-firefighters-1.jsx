import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/ro7o76b0x.css';
import '../../css/b/bhb5ffbim.css';
import '../../css/e/eo77zm_ub.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ro7o76b0x"/><path class="bhb5ffbim"/><path class="eo77zm_ub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:safety-call-firefighters-1"} {...others} />);
}

export default Component;
