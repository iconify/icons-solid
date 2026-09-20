import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/h/hdstceowm.css';
import '../../css/k/k858ldbet.css';
import '../../css/d/dyh2mrb1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="hdstceowm"/><path class="k858ldbet"/><path class="dyh2mrb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:question-mark-circle"} {...others} />);
}

export default Component;
