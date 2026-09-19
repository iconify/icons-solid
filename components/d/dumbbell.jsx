import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/z-rex9k5x.css';
import '../../css/f/fjphlq0cs.css';
import '../../css/w/wbk4trbos.css';
import '../../css/k/k6-hufbvu.css';
import '../../css/f/fb08awk6v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="z-rex9k5x"/><path class="fjphlq0cs"/><path class="wbk4trbos"/><path class="k6-hufbvu"/><rect transform="matrix(1 0 0 -1 14 27)" class="fb08awk6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dumbbell"} {...others} />);
}

export default Component;
