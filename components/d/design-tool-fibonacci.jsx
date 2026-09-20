import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omzzonb-u.css';
import '../../css/y/yo0h3bcre.css';
import '../../css/j/j0tm1ybik.css';
import '../../css/c/c_wcp_b-e.css';
import '../../css/r/rpprq9hjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="omzzonb-u"/><path class="yo0h3bcre"/><path class="j0tm1ybik"/><path class="c_wcp_b-e"/><path class="rpprq9hjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:design-tool-fibonacci"} {...others} />);
}

export default Component;
