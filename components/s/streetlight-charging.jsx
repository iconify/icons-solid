import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r6aqwubay.css';
import '../../css/o/o542s9bss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r6aqwubay"/><path class="o542s9bss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:streetlight-charging"} {...others} />);
}

export default Component;
