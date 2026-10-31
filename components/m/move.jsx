import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xdwzsgdrd.css';
import '../../css/f/fnomx0bsr.css';
import '../../css/d/dajmntbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xdwzsgdrd"/><path class="fnomx0bsr wm-shadow"/><path class="dajmntbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:move"} {...others} />);
}

export default Component;
