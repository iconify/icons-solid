import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhg449f9a.css';
import '../../css/n/nyfr4dbum.css';
import '../../css/v/vk-4kekxy.css';
import '../../css/m/mx5g0qbce.css';
import '../../css/s/suhb9uauh.css';
import '../../css/l/l8d_04c-o.css';
import '../../css/t/tnxyuubxt.css';
import '../../css/y/ybx-h-60a.css';
import '../../css/r/ro8f-lggp.css';
import '../../css/e/ez5174b1w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uhg449f9a"/><path class="nyfr4dbum"/><path class="vk-4kekxy"/><path class="mx5g0qbce"/><path class="suhb9uauh"/><path class="l8d_04c-o"/><path class="tnxyuubxt"/><path clip-rule="evenodd" class="ybx-h-60a"/><path class="ro8f-lggp"/><path clip-rule="evenodd" class="ez5174b1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:fireman-2-duo"} {...others} />);
}

export default Component;
