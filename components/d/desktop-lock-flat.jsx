import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydzvecrzs.css';
import '../../css/o/ogwjrk59f.css';
import '../../css/r/r_fujz1eg.css';
import '../../css/c/ckjtr41lg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ydzvecrzs"/><path clip-rule="evenodd" class="ogwjrk59f"/><path clip-rule="evenodd" class="r_fujz1eg"/><path class="ckjtr41lg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:desktop-lock-flat"} {...others} />);
}

export default Component;
