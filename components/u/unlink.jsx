import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k3vna54-h.css';
import '../../css/y/y7sicuczr.css';
import '../../css/g/gmm4mtd8a.css';
import '../../css/s/s4trjibin.css';
import '../../css/j/j17-h_bji.css';
import '../../css/l/l63g09-cp.css';
import '../../css/b/b-4cttb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k3vna54-h wm-shadow"/><path class="y7sicuczr"/><path class="gmm4mtd8a"/><path class="s4trjibin"/><path class="j17-h_bji"/><path class="l63g09-cp"/><path class="b-4cttb2d wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:unlink"} {...others} />);
}

export default Component;
