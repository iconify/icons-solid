import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oexwiotep.css';
import '../../css/n/nboirytbo.css';
import '../../css/y/yt6hup7za.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="oexwiotep"/><path class="nboirytbo"/><path class="yt6hup7za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-paper-bold-duotone"} {...others} />);
}

export default Component;
