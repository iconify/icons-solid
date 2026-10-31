import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aa0449bjo.css';
import '../../css/d/dmeqm9b9o.css';
import '../../css/u/u-4o0pbez.css';
import '../../css/f/fbkhmwd0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="aa0449bjo wm-shadow"/><path class="dmeqm9b9o wm-shadow"/><path class="u-4o0pbez"/><path class="fbkhmwd0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:leaf"} {...others} />);
}

export default Component;
