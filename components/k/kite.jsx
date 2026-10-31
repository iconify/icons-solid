import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o4f-kgq7r.css';
import '../../css/r/rcy39jrhg.css';
import '../../css/p/p4rg2bcss.css';
import '../../css/g/gg8-_obvh.css';
import '../../css/i/ile8n0t3i.css';
import '../../css/t/ts1laxbud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="o4f-kgq7r wm-shadow"/><path class="rcy39jrhg"/><path class="p4rg2bcss"/><path class="gg8-_obvh wm-s"/><path class="ile8n0t3i wm-s"/><path class="ts1laxbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:kite"} {...others} />);
}

export default Component;
