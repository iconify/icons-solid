import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uq1ygrbol.css';
import '../../css/w/wz8kxabmh.css';
import '../../css/w/wwgmjs_iq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uq1ygrbol"/><path class="wz8kxabmh"/><path class="wwgmjs_iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medical-hospital"} {...others} />);
}

export default Component;
