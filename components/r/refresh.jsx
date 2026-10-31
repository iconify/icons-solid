import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z4h-ykbza.css';
import '../../css/x/xwsqaqb_k.css';
import '../../css/a/a-a57fp8u.css';
import '../../css/o/oasiy2rns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z4h-ykbza"/><path class="wm-shadow xwsqaqb_k"/><path class="a-a57fp8u"/><path class="oasiy2rns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:refresh"} {...others} />);
}

export default Component;
