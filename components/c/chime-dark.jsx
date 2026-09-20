import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5pjv9b5y.css';
import '../../css/t/tzdbsnb3r.css';
import '../../css/c/c4lng84yu.css';

const viewBox = {"width":672,"height":193};
const content = `<g class="l5pjv9b5y"><path class="tzdbsnb3r"/><path clip-rule="evenodd" class="c4lng84yu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:chime-dark"} {...others} />);
}

export default Component;
