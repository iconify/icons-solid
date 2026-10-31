import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ov_robb3s.css';
import '../../css/y/y875pzbpu.css';
import '../../css/w/wg-8r2bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ov_robb3s wm-k"/><path class="wm-a y875pzbpu"/><path class="wg-8r2bsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:link-2"} {...others} />);
}

export default Component;
