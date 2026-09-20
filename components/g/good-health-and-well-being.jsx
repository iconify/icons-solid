import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ccjdm598r.css';
import '../../css/d/dzzk7vkop.css';
import '../../css/m/mhr7ub-3v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ccjdm598r"/><path class="dzzk7vkop"/><path class="mhr7ub-3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:good-health-and-well-being"} {...others} />);
}

export default Component;
