import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dacsmr53v.css';
import '../../css/v/v1yazvbdk.css';
import '../../css/g/g2xclxbug.css';
import '../../css/m/m3y7qnb6b.css';
import '../../css/b/b8feq7nfj.css';
import '../../css/u/uk5zfenqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="dacsmr53v wm-deco"/><path class="v1yazvbdk wm-deco"/><path class="g2xclxbug wm-deco"/><path class="m3y7qnb6b wm-k"/><path class="b8feq7nfj wm-a"/><path class="uk5zfenqu wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mountain-blueprint"} {...others} />);
}

export default Component;
