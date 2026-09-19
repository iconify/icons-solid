import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t_m_ghbiu.css';
import '../../css/h/hjn7kwbhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t_m_ghbiu"/><path class="hjn7kwbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-infrared-thermometer-gun"} {...others} />);
}

export default Component;
