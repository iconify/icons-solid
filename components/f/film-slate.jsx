import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d87ga2bkk.css';
import '../../css/z/zv4hzbbyt.css';
import '../../css/a/ay4t6qbmo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="d87ga2bkk"/><path class="zv4hzbbyt"/><path class="ay4t6qbmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:film-slate"} {...others} />);
}

export default Component;
