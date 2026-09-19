import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qe942ccmo.css';
import '../../css/d/dxiv9v20g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qe942ccmo"/><path class="dxiv9v20g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:briefcase-03"} {...others} />);
}

export default Component;
