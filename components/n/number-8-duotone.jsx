import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xow-v8lod.css';
import '../../css/k/k_uimnb6o.css';
import '../../css/h/hta0mxbau.css';
import '../../css/h/hhgyo3bul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xow-v8lod"/><circle class="k_uimnb6o"/><circle class="hta0mxbau"/><circle class="hhgyo3bul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:number-8-duotone"} {...others} />);
}

export default Component;
