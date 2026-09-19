import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/si64h9b3z.css';
import '../../css/d/d_7hulbhf.css';
import '../../css/a/a0_59cbgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="si64h9b3z"/><path class="d_7hulbhf"/><path class="a0_59cbgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:washing-machine"} {...others} />);
}

export default Component;
