import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v8atibp5v.css';
import '../../css/y/yfcmbwbvg.css';
import '../../css/u/uq6pq445a.css';
import '../../css/y/yrgiqhxka.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v8atibp5v"/><path class="wm-shine yfcmbwbvg"/><path class="uq6pq445a wm-k"/><path class="wm-a yrgiqhxka"/><path class="klzcy0ogc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:workflow"} {...others} />);
}

export default Component;
