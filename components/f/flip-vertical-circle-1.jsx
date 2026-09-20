import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fha8je6yo.css';
import '../../css/r/rp9wifbto.css';
import '../../css/u/u7x_1nf0m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fha8je6yo"/><path class="rp9wifbto"/><path class="u7x_1nf0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:flip-vertical-circle-1"} {...others} />);
}

export default Component;
