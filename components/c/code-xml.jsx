import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hvyxv8hfx.css';
import '../../css/a/acrycrbka.css';
import '../../css/n/n0az6mbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hvyxv8hfx wm-shadow"/><path class="acrycrbka wm-shadow"/><path class="n0az6mbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:code-xml"} {...others} />);
}

export default Component;
