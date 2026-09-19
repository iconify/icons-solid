import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xe53owbmy.css';
import '../../css/m/mny45xb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="xe53owbmy"/><path class="mny45xb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:balance-scale"} {...others} />);
}

export default Component;
