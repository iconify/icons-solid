import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tu-o_ab8m.css';
import '../../css/w/wv5r0vb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tu-o_ab8m"/><path class="wv5r0vb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-line-duotone"} {...others} />);
}

export default Component;
