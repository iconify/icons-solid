import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z2_dujbnz.css';
import '../../css/k/ki-i0yb6u.css';
import '../../css/p/pcnjho3gj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z2_dujbnz"/><path class="ki-i0yb6u wm-shadow"/><path class="pcnjho3gj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:list-music"} {...others} />);
}

export default Component;
