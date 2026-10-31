import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t6y-3unio.css';
import '../../css/d/dj5pntbty.css';
import '../../css/d/diuz99pei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="t6y-3unio wm-shadow"/><path class="dj5pntbty wm-shadow"/><path class="diuz99pei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:signature"} {...others} />);
}

export default Component;
