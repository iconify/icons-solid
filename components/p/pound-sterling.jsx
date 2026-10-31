import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rjfa5r6oo.css';
import '../../css/r/ryfnj1b-x.css';
import '../../css/c/chbn-o-on.css';
import '../../css/h/hfvrmofqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rjfa5r6oo wm-shadow"/><path class="ryfnj1b-x wm-shadow"/><path class="chbn-o-on"/><path class="hfvrmofqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:pound-sterling"} {...others} />);
}

export default Component;
