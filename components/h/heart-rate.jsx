import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyf0zn9wu.css';
import '../../css/s/s2wbsnbyq.css';
import '../../css/w/wplmxac-n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zyf0zn9wu"/><path class="s2wbsnbyq"/><path class="wplmxac-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:heart-rate"} {...others} />);
}

export default Component;
