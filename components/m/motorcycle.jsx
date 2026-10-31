import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lsi9_rb6t.css';
import '../../css/n/nu7q2clxj.css';
import '../../css/q/qguy_lbsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lsi9_rb6t wm-shadow"/><path class="nu7q2clxj wm-shadow"/><path class="qguy_lbsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:motorcycle"} {...others} />);
}

export default Component;
