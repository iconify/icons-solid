import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytt1jfbgv.css';
import '../../css/r/rx1fuccar.css';
import '../../css/b/bledq51zh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ytt1jfbgv"/><path class="rx1fuccar"/><path class="bledq51zh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:flask-alt"} {...others} />);
}

export default Component;
