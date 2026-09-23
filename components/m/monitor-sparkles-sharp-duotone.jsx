import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nxkqdkb5j.css';
import '../../css/n/nbau3hbls.css';
import '../../css/d/dmrlztban.css';
import '../../css/p/pfr5hhxja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="nxkqdkb5j"/><path class="nbau3hbls"/><path class="dmrlztban"/><path class="pfr5hhxja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:monitor-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
