import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4e6ys-el.css';
import '../../css/u/uprcssgre.css';
import '../../css/u/urmk4acde.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="t4e6ys-el"/><path clip-rule="evenodd" class="uprcssgre"/><path class="urmk4acde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:putio"} {...others} />);
}

export default Component;
