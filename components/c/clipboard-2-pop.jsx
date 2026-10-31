import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4ui9xrgk.css';
import '../../css/g/gx2ywgbfh.css';
import '../../css/s/sz6789bet.css';
import '../../css/r/r6tq1qjhr.css';
import '../../css/p/pu3p6sbiz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k4ui9xrgk"/><path class="gx2ywgbfh"/><path clip-rule="evenodd" class="sz6789bet"/><path class="r6tq1qjhr"/><path class="pu3p6sbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:clipboard-2-pop"} {...others} />);
}

export default Component;
