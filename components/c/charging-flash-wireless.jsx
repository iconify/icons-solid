import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i4d-utb-k.css';
import '../../css/v/vfu_14b9n.css';
import '../../css/z/zf1rafb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="i4d-utb-k"/><path class="vfu_14b9n"/><path class="zf1rafb_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:charging-flash-wireless"} {...others} />);
}

export default Component;
