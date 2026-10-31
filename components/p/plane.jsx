import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tjr92xbfv.css';
import '../../css/y/yd1resboj.css';
import '../../css/e/e66ihdb7b.css';
import '../../css/s/s81899b3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tjr92xbfv wm-shadow"/><path class="wm-shadow yd1resboj"/><path class="e66ihdb7b"/><path class="s81899b3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:plane"} {...others} />);
}

export default Component;
