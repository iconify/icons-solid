import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/alfbd7bhz.css';
import '../../css/a/aplig2bpt.css';
import '../../css/j/jkj98vkgf.css';
import '../../css/m/m3y59dfla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="alfbd7bhz wm-deco"/><path class="aplig2bpt wm-deco"/><path class="jkj98vkgf wm-deco"/><path class="m3y59dfla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:triangle-blueprint"} {...others} />);
}

export default Component;
