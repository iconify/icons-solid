import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hgd1csbih.css';
import '../../css/t/t7088n-xt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hgd1csbih"/><path class="t7088n-xt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:headphone-mute"} {...others} />);
}

export default Component;
