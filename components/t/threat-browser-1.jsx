import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fwcvvbb2h.css';
import '../../css/a/abfrbzbxy.css';
import '../../css/e/ewl_9bbbc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="fwcvvbb2h"/><path class="abfrbzbxy"/><path class="ewl_9bbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:threat-browser-1"} {...others} />);
}

export default Component;
