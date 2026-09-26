import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wtec2jsdr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/r8--jog_c.css';
import '../../css/x/x0h9n2bbe.css';
import '../../css/r/r7zqynqqz.css';
import '../../css/y/ylqmu_4on.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wtec2jsdr"/><g class="mc2zb0bvp"><path class="r8--jog_c"/><path class="x0h9n2bbe"/><path class="r7zqynqqz"/><path class="ylqmu_4on"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-wave-bold-duotone"} {...others} />);
}

export default Component;
