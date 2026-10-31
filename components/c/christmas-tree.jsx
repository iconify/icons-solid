import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v-i9tkbdq.css';
import '../../css/n/namcbdbmy.css';
import '../../css/w/w-n2vmb1j.css';
import '../../css/v/vy5e8ptfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="v-i9tkbdq wm-shadow"/><path class="namcbdbmy wm-shadow"/><path class="w-n2vmb1j"/><path class="vy5e8ptfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:christmas-tree"} {...others} />);
}

export default Component;
