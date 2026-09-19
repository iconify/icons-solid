import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pvrj2gyov.css';
import '../../css/o/oex8_ubip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pvrj2gyov"/><path class="oex8_ubip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:time-setting-01"} {...others} />);
}

export default Component;
