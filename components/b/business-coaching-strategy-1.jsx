import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ab-2i5bvk.css';
import '../../css/r/rh8_bp6fq.css';
import '../../css/z/zdl4vfpnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ab-2i5bvk"/><path class="rh8_bp6fq"/><path class="zdl4vfpnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-coaching-strategy-1"} {...others} />);
}

export default Component;
