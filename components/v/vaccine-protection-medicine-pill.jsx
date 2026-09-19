import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tp-m4ox4l.css';
import '../../css/v/vbel9cu5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tp-m4ox4l"/><path class="vbel9cu5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-medicine-pill"} {...others} />);
}

export default Component;
