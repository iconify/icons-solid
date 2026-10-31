import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qhwip2b6c.css';
import '../../css/j/jfxx-nb1i.css';
import '../../css/f/fufcutb1f.css';
import '../../css/e/en4jeyb0b.css';
import '../../css/n/njnsq62ia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qhwip2b6c wm-shadow"/><path class="jfxx-nb1i wm-shadow"/><path class="fufcutb1f"/><path class="en4jeyb0b"/><path class="njnsq62ia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mandarin-orange"} {...others} />);
}

export default Component;
