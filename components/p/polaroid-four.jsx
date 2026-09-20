import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xt1wfk3et.css';
import '../../css/f/f_9wl8x9a.css';
import '../../css/m/mz_yvhbbs.css';
import '../../css/x/xzk11dbxp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xt1wfk3et"/><path class="f_9wl8x9a"/><path class="mz_yvhbbs"/><path class="xzk11dbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:polaroid-four"} {...others} />);
}

export default Component;
