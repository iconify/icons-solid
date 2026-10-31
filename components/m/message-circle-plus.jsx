import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y81dwzzkb.css';
import '../../css/d/dmkqfxb0z.css';
import '../../css/r/rfq5jpzcx.css';
import '../../css/f/fb9nnl39u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow y81dwzzkb"/><path class="dmkqfxb0z wm-shadow"/><path class="rfq5jpzcx"/><path class="fb9nnl39u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:message-circle-plus"} {...others} />);
}

export default Component;
