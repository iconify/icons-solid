import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k8joftj-v.css';
import '../../css/v/vffpfaczr.css';
import '../../css/n/nzuptnbav.css';
import '../../css/p/pxm2isbes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="k8joftj-v"/><path class="vffpfaczr"/><path class="nzuptnbav"/><path class="pxm2isbes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tape-measure"} {...others} />);
}

export default Component;
