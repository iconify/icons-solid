import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ummvq7b2g.css';
import '../../css/e/efhtg0b9p.css';
import '../../css/m/m53i1ackn.css';
import '../../css/q/qkjfz3bhi.css';
import '../../css/w/w11pdwb-r.css';
import '../../css/f/fpi105_iz.css';
import '../../css/f/f8g-6cb0v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ummvq7b2g"/><path class="efhtg0b9p"/><path class="m53i1ackn"/><path class="qkjfz3bhi"/><path class="w11pdwb-r"/><path class="fpi105_iz"/><path class="f8g-6cb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-setting"} {...others} />);
}

export default Component;
