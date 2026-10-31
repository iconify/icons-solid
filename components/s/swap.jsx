import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/e474-ib2b.css';
import '../../css/z/zm4iilbpm.css';
import '../../css/f/ffkddcbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="e474-ib2b wm-k"/><path class="wm-a zm4iilbpm"/><path class="ffkddcbxp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:swap"} {...others} />);
}

export default Component;
