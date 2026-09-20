import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/u/uifzf81kd.css';
import '../../css/l/lvunf81kr.css';
import '../../css/m/mupqf7bjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="uifzf81kd"/><path class="lvunf81kr"/><path class="mupqf7bjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-question-mark"} {...others} />);
}

export default Component;
