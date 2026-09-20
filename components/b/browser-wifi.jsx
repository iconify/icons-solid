import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh_athauz.css';
import '../../css/n/n_wytxb8c.css';
import '../../css/e/eh7nlrbqw.css';
import '../../css/x/x8ji8d7mk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xh_athauz"/><path class="n_wytxb8c"/><path class="eh7nlrbqw"/><path class="x8ji8d7mk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:browser-wifi"} {...others} />);
}

export default Component;
