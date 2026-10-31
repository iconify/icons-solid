import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/msfhke2fa.css';
import '../../css/c/cpv391b8c.css';
import '../../css/j/j40jjjdlq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="msfhke2fa wm-shadow"/><path class="cpv391b8c wm-shadow"/><path class="j40jjjdlq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:rose-bouquet"} {...others} />);
}

export default Component;
