import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bov66nrpl.css';
import '../../css/h/hfi5e-rtf.css';
import '../../css/u/um2mdjbzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bov66nrpl wm-k"/><path class="hfi5e-rtf wm-a"/><path class="um2mdjbzw wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:list"} {...others} />);
}

export default Component;
