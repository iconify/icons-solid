import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px2j-5fim.css';
import '../../css/e/e3idh-b6l.css';
import '../../css/d/djebu4r4x.css';
import '../../css/n/no52ceyin.css';
import '../../css/j/j1jv3nb5v.css';
import '../../css/v/v2na_y4wh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="px2j-5fim"/><path class="e3idh-b6l"/><path class="djebu4r4x"/><path class="no52ceyin"/><path class="j1jv3nb5v"/><path class="v2na_y4wh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:notebook"} {...others} />);
}

export default Component;
