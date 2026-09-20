import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkvdnui8p.css';
import '../../css/i/ivietybzz.css';
import '../../css/x/xo0y53bnd.css';
import '../../css/t/t2bz-uosb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hkvdnui8p"/><path class="ivietybzz"/><path class="xo0y53bnd"/><path class="t2bz-uosb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:microscope-observation-sciene"} {...others} />);
}

export default Component;
