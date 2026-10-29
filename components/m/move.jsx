import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/plqcndtbg.css';
import '../../css/o/o0fnzl9zf.css';
import '../../css/t/ttad8vbbg.css';
import '../../css/x/x-s69lpoi.css';
import '../../css/a/ayb9i7dux.css';
import '../../css/h/hkycmm4qj.css';
import '../../css/e/e4nbcpb1u.css';
import '../../css/e/e6pohef2b.css';
import '../../css/w/w25to8biy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="plqcndtbg wm-shadow"/><path class="o0fnzl9zf wm-shadow"/><path class="ttad8vbbg"/><path class="x-s69lpoi"/><path class="ayb9i7dux"/><path class="hkycmm4qj"/><path class="e4nbcpb1u wm-shine"/><path class="e6pohef2b wm-shine"/><path class="w25to8biy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:move"} {...others} />);
}

export default Component;
