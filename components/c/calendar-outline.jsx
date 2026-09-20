import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hgxldke9d.css';
import '../../css/y/ypy-a6bdt.css';
import '../../css/e/egm-6jb-e.css';
import '../../css/r/rg8vhvbio.css';
import '../../css/u/u9iziiqda.css';
import '../../css/i/ipxygcxkm.css';
import '../../css/o/o49uv6bhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hgxldke9d"/><path class="ypy-a6bdt"/><path class="egm-6jb-e"/><path class="rg8vhvbio"/><path class="u9iziiqda"/><path class="ipxygcxkm"/><path clip-rule="evenodd" class="o49uv6bhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-outline"} {...others} />);
}

export default Component;
