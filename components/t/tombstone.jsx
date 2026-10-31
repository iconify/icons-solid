import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nv44gjb1e.css';
import '../../css/b/btdmjfbdm.css';
import '../../css/h/hoeyknbxx.css';
import '../../css/i/i_gylybvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nv44gjb1e wm-shadow"/><path class="btdmjfbdm wm-shadow"/><path class="hoeyknbxx"/><path class="i_gylybvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:tombstone"} {...others} />);
}

export default Component;
