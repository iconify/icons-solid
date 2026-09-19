import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kiqyvrgct.css';
import '../../css/j/j9jg2obxg.css';
import '../../css/n/no52ceyin.css';
import '../../css/j/j1jv3nb5v.css';
import '../../css/l/ltibckbkb.css';
import '../../css/y/yhvgtebli.css';
import '../../css/z/z-44bwbks.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="kiqyvrgct"/><path class="j9jg2obxg"/><path class="no52ceyin"/><path class="j1jv3nb5v"/><path class="ltibckbkb"/><path class="yhvgtebli"/><path class="z-44bwbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:notebook-with-decorative-cover"} {...others} />);
}

export default Component;
