import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/f/fssymtbxz.css';
import '../../css/o/o5i6tenfz.css';
import '../../css/y/yj1klybou.css';
import '../../css/t/tceumrtfd.css';
import '../../css/l/lq426yb_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="fssymtbxz"/><path class="o5i6tenfz"/><path class="yj1klybou"/><path class="tceumrtfd"/><path class="lq426yb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:service-bell-pop"} {...others} />);
}

export default Component;
