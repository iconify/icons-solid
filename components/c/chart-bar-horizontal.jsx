import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/q0vi-9eru.css';
import '../../css/s/sjsppzltu.css';
import '../../css/s/skn8acc-z.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="q0vi-9eru"/><path class="sjsppzltu wm-k"/><path class="skn8acc-z wm-a"/><path class="klzcy0ogc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-bar-horizontal"} {...others} />);
}

export default Component;
