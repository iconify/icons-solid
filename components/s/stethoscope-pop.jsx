import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/z/zt90-3bsh.css';
import '../../css/j/j50inzb9g.css';
import '../../css/s/s-gxocevk.css';
import '../../css/y/ybowng68r.css';
import '../../css/k/kd_6itgbz.css';
import '../../css/i/iwy6qobjt.css';
import '../../css/l/l13qkwbpw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="zt90-3bsh"/><path class="j50inzb9g"/><path class="s-gxocevk"/><path class="ybowng68r"/><path class="kd_6itgbz"/><path class="iwy6qobjt"/><path class="l13qkwbpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:stethoscope-pop"} {...others} />);
}

export default Component;
