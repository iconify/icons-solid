import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bt__3t6bm.css';
import '../../css/j/j9gaom6_i.css';
import '../../css/c/cnc8kxp4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bt__3t6bm"/><circle class="j9gaom6_i"/><circle class="cnc8kxp4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tangent"} {...others} />);
}

export default Component;
