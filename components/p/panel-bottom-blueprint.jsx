import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qxr4d-bhc.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/g/g56t_c8un.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qxr4d-bhc wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="g56t_c8un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-bottom-blueprint"} {...others} />);
}

export default Component;
