import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/drf1s2bhc.css';
import '../../css/n/nf1iidswc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="drf1s2bhc"/><path class="nf1iidswc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:time-clock-hand-1"} {...others} />);
}

export default Component;
