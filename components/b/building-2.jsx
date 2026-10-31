import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lh90wl05i.css';
import '../../css/d/d9wctcbmc.css';
import '../../css/o/o6zqqbtwo.css';
import '../../css/n/n4pb7lbqy.css';
import '../../css/q/q1qoqacay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lh90wl05i wm-shadow"/><path class="d9wctcbmc wm-shadow"/><path class="o6zqqbtwo"/><path class="n4pb7lbqy"/><path class="q1qoqacay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:building-2"} {...others} />);
}

export default Component;
