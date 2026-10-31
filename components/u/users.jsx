import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wabscub3x.css';
import '../../css/a/aykhyobqg.css';
import '../../css/f/fy4i88jki.css';
import '../../css/v/v8y-98bnm.css';
import '../../css/z/zar_0vgqz.css';
import '../../css/h/h57cjbcbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wabscub3x wm-shadow"/><path class="aykhyobqg wm-shadow"/><path class="fy4i88jki"/><path class="v8y-98bnm"/><path class="zar_0vgqz"/><path class="h57cjbcbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:users"} {...others} />);
}

export default Component;
