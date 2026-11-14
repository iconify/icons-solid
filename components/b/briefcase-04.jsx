import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q5af2hbrr.css';
import '../../css/t/tufr81b4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q5af2hbrr"/><path class="tufr81b4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:briefcase-04"} {...others} />);
}

export default Component;
