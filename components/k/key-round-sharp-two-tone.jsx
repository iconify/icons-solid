import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o2fal7eyn.css';
import '../../css/e/ei36hybob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="o2fal7eyn"/><path class="ei36hybob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:key-round-sharp-two-tone"} {...others} />);
}

export default Component;
