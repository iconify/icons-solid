import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzk6tablr.css';
import '../../css/q/qojpxl_qk.css';
import '../../css/e/e6sif6niy.css';
import '../../css/h/h1svk9bfb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="rzk6tablr"/><path class="qojpxl_qk"/><path clip-rule="evenodd" class="e6sif6niy"/><path class="h1svk9bfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:medicine-duo"} {...others} />);
}

export default Component;
