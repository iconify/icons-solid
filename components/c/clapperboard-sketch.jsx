import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z-5p7fbuo.css';
import '../../css/z/zztk9yikx.css';
import '../../css/c/cclo89b_r.css';
import '../../css/w/wa0mzv3xz.css';
import '../../css/v/vozd3wjqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="z-5p7fbuo"/><path class="wm-k zztk9yikx"/><path class="cclo89b_r wm-a"/><path class="wa0mzv3xz wm-k"/><path class="vozd3wjqk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clapperboard-sketch"} {...others} />);
}

export default Component;
