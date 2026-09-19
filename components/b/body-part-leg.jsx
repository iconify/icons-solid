import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6e9qt2pu.css';
import '../../css/v/vcfjxsb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w6e9qt2pu"/><path class="vcfjxsb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:body-part-leg"} {...others} />);
}

export default Component;
