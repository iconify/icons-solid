import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/suft8gbjr.css';
import '../../css/i/i6mewxbcc.css';
import '../../css/q/q2qyt3beq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="suft8gbjr"/><circle class="i6mewxbcc"/><path class="q2qyt3beq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:car-time"} {...others} />);
}

export default Component;
