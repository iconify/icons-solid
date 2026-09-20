import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e11yaqt_p.css';
import '../../css/i/ifvjvgbss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e11yaqt_p"/><path class="ifvjvgbss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-left-linear"} {...others} />);
}

export default Component;
