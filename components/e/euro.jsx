import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/duyyrjbez.css';
import '../../css/f/f4uooybgd.css';
import '../../css/w/wg-8r2bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="duyyrjbez wm-k"/><path class="f4uooybgd wm-a"/><path class="wg-8r2bsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:euro"} {...others} />);
}

export default Component;
