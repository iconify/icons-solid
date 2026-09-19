import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-l1pd0_w.css';
import '../../css/y/y5u96sb9x.css';
import '../../css/z/zjhnhpypo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h-l1pd0_w"><path class="y5u96sb9x"/><path clip-rule="evenodd" class="zjhnhpypo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:keyframe-align-horizontal-solid"} {...others} />);
}

export default Component;
