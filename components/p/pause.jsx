import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nmft12bys.css';
import '../../css/x/xnc7029rb.css';
import '../../css/s/stgk1sbdc.css';
import '../../css/k/k5th1ruec.css';
import '../../css/t/tg_gdp16g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nmft12bys wm-shadow"/><path class="wm-shadow xnc7029rb"/><path class="stgk1sbdc"/><path class="k5th1ruec"/><path class="tg_gdp16g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:pause"} {...others} />);
}

export default Component;
