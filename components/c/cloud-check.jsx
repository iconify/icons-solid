import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hryfoc98u.css';
import '../../css/b/bb5blz89d.css';
import '../../css/c/cka_d9n3y.css';
import '../../css/s/sy15m6baj.css';
import '../../css/z/zdpy6fbii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hryfoc98u wm-shadow"/><path class="bb5blz89d wm-shadow"/><path class="cka_d9n3y"/><path class="sy15m6baj"/><path class="wm-s zdpy6fbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-check"} {...others} />);
}

export default Component;
