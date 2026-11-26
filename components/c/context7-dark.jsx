import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r05ofdc8m.css';
import '../../css/m/mhqfye0oj.css';

const viewBox = {"width":28,"height":28};
const content = `<g class="ft5dv1b6b"><rect class="r05ofdc8m"/><path class="mhqfye0oj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:context7-dark"} {...others} />);
}

export default Component;
