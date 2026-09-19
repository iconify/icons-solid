import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/msjhf_b2m.css';
import '../../css/v/vqsigh45m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="msjhf_b2m"/><path class="vqsigh45m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-verified"} {...others} />);
}

export default Component;
