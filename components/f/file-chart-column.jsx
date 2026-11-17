import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bcihm804p.css';
import '../../css/w/w6qslpbjy.css';
import '../../css/y/yn38we3bp.css';
import '../../css/t/tmvfxeu1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="bcihm804p"/><path class="w6qslpbjy"/><path class="yn38we3bp"/><path class="tmvfxeu1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:file-chart-column"} {...others} />);
}

export default Component;
