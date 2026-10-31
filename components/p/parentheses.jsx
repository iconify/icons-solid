import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nd8oncbxa.css';
import '../../css/y/yailk0b5w.css';
import '../../css/m/mv53-jfge.css';
import '../../css/d/d8fckhbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nd8oncbxa wm-shadow"/><path class="wm-shadow yailk0b5w"/><path class="mv53-jfge"/><path class="d8fckhbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:parentheses"} {...others} />);
}

export default Component;
