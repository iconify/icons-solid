import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vfkf9foil.css';
import '../../css/c/cdyd7r4yc.css';
import '../../css/k/kafksab6o.css';
import '../../css/l/lm05uccqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vfkf9foil"/><path class="cdyd7r4yc"/><path class="kafksab6o"/><path class="lm05uccqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-security-03"} {...others} />);
}

export default Component;
