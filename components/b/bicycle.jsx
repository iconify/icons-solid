import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rqx0pywvi.css';
import '../../css/h/hz_ovn6wb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rqx0pywvi"/><path class="hz_ovn6wb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bicycle"} {...others} />);
}

export default Component;
