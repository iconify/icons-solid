import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q_5ckyazc.css';
import '../../css/j/jt285nhnx.css';
import '../../css/l/lgzrwwbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="q_5ckyazc"/><path class="jt285nhnx"/><path class="lgzrwwbeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:image-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
