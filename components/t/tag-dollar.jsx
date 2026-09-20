import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hc2jzcwpr.css';
import '../../css/v/v0upu6bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hc2jzcwpr"/><path class="v0upu6bwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tag-dollar"} {...others} />);
}

export default Component;
