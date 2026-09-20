import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/elcq1wb7f.css';
import '../../css/d/dffv2jbav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="elcq1wb7f"/><path class="dffv2jbav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:insurance-head"} {...others} />);
}

export default Component;
