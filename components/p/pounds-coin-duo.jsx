import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lavlmcboo.css';
import '../../css/t/tk_-6uodd.css';
import '../../css/z/ziw92bpia.css';
import '../../css/v/vg56ky4ro.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lavlmcboo"/><path class="tk_-6uodd"/><path class="ziw92bpia"/><path class="vg56ky4ro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pounds-coin-duo"} {...others} />);
}

export default Component;
