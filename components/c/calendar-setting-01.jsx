import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w39_dhbpm.css';
import '../../css/t/tl1j00uib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w39_dhbpm"/><path class="tl1j00uib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-setting-01"} {...others} />);
}

export default Component;
