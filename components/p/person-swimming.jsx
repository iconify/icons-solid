import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pz7c98mqm.css';
import '../../css/y/ydgymnbxt.css';
import '../../css/f/ffzga1q9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="pz7c98mqm wm-shadow"/><path class="wm-shadow ydgymnbxt"/><path class="ffzga1q9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:person-swimming"} {...others} />);
}

export default Component;
