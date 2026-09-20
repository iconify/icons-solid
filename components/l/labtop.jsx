import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mw-_idb5r.css';
import '../../css/b/b6vs7ccwa.css';
import '../../css/c/crjue3bgv.css';
import '../../css/e/efyoftowq.css';

const viewBox = {"width":41,"height":41,"top":-0.5};
const content = `<g class="ft5dv1b6b"><path class="mw-_idb5r"/><path class="b6vs7ccwa"/><path class="crjue3bgv"/><path class="efyoftowq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:labtop"} {...others} />);
}

export default Component;
