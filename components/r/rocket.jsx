import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fo1n74ldf.css';
import '../../css/r/rcsb49bqm.css';
import '../../css/v/vnu853bvd.css';
import '../../css/k/k7b40_bso.css';
import '../../css/v/vgg3x2bdg.css';
import '../../css/f/fbymnv3-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fo1n74ldf wm-shadow"/><path class="rcsb49bqm"/><path class="vnu853bvd"/><path class="k7b40_bso"/><path class="vgg3x2bdg"/><path class="fbymnv3-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:rocket"} {...others} />);
}

export default Component;
