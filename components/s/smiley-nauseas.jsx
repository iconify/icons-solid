import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-83soh2y.css';
import '../../css/c/cgp9kxg8p.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/a/a0tq5_bzm.css';
import '../../css/d/d7h2j9ugi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="x-83soh2y"/><path class="cgp9kxg8p"/><path class="xjfc-xbtr"/><path class="a0tq5_bzm"/><path class="d7h2j9ugi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smiley-nauseas"} {...others} />);
}

export default Component;
