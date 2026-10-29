import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yzln40bxl.css';
import '../../css/y/ynh3ncb9f.css';
import '../../css/u/ut75iob1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco yzln40bxl"/><path class="wm-deco ynh3ncb9f"/><path class="ut75iob1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:football-blueprint"} {...others} />);
}

export default Component;
