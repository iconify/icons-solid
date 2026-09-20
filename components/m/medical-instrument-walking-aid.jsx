import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b--d9k_8s.css';
import '../../css/c/cv1idlb-d.css';
import '../../css/i/iey6_0bbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b--d9k_8s"/><path class="cv1idlb-d"/><path class="iey6_0bbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-instrument-walking-aid"} {...others} />);
}

export default Component;
