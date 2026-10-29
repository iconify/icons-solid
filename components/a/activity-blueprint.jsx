import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zwwoaxgmi.css';
import '../../css/l/l00otmbzz.css';
import '../../css/h/h1vixoucg.css';
import '../../css/c/c0l91kssj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zwwoaxgmi"/><path class="l00otmbzz wm-deco"/><path class="h1vixoucg"/><path class="c0l91kssj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:activity-blueprint"} {...others} />);
}

export default Component;
