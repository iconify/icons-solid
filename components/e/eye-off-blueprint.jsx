import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b74rkzv8a.css';
import '../../css/v/vy7ah-75i.css';
import '../../css/m/mz2x21b7z.css';
import '../../css/l/l-wis9b-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="b74rkzv8a wm-deco"/><path class="vy7ah-75i wm-k"/><path class="mz2x21b7z wm-a"/><path class="l-wis9b-x wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:eye-off-blueprint"} {...others} />);
}

export default Component;
