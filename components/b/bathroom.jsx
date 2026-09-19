import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aodfskbyp.css';
import '../../css/q/q0j2kvbkg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aodfskbyp"/><path class="q0j2kvbkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bathroom"} {...others} />);
}

export default Component;
