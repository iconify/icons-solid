import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cgilv85rn.css';
import '../../css/m/mpsx0n0tx.css';
import '../../css/w/wua8-zbzl.css';
import '../../css/c/caeairb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cgilv85rn wm-shadow"/><path class="mpsx0n0tx wm-shadow"/><path class="wua8-zbzl"/><path class="caeairb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cup-soda"} {...others} />);
}

export default Component;
