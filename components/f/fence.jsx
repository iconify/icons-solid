import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zr4pqbc7d.css';
import '../../css/g/gz8m3kbio.css';
import '../../css/m/mbl6ucccy.css';
import '../../css/n/nizbsmb2j.css';
import '../../css/c/cghb1tbrg.css';
import '../../css/z/zh5pq-bed.css';
import '../../css/h/h-auy17ri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow zr4pqbc7d"/><path class="gz8m3kbio wm-shadow"/><path class="mbl6ucccy"/><path class="nizbsmb2j"/><path class="cghb1tbrg"/><path class="zh5pq-bed"/><path class="h-auy17ri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:fence"} {...others} />);
}

export default Component;
