import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrimse02m.css';
import '../../css/d/dbxdwkb4l.css';
import '../../css/s/sz-0c-bdy.css';
import '../../css/h/hwrw65e8d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yrimse02m"/><path class="dbxdwkb4l"/><path class="sz-0c-bdy"/><path class="hwrw65e8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:business-profession-home-office"} {...others} />);
}

export default Component;
