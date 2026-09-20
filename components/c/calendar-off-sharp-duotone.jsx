import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/juia08uox.css';
import '../../css/u/u9-e2p27r.css';
import '../../css/f/f4vx4ccga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="juia08uox"/><path class="u9-e2p27r"/><path class="f4vx4ccga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calendar-off-sharp-duotone"} {...others} />);
}

export default Component;
