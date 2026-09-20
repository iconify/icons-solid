import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rte_5ulhq.css';
import '../../css/u/ue1znegmj.css';
import '../../css/h/hm0xfacvg.css';
import '../../css/i/in7fxsblf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rte_5ulhq"/><path class="ue1znegmj"/><path class="hm0xfacvg"/><path class="in7fxsblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cyborg-2"} {...others} />);
}

export default Component;
