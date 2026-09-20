import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0107xb3u.css';
import '../../css/a/ag4ijjber.css';
import '../../css/u/uopgzobpv.css';
import '../../css/v/v4h00apzk.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/v/vqdj2dbxs.css';
import '../../css/t/tz9k8sbgc.css';
import '../../css/n/n9_ja-b5d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="n0107xb3u"/><path class="ag4ijjber"/><path class="uopgzobpv"/><path class="v4h00apzk"/><g class="ij2x_72vy"><path class="vqdj2dbxs"/><path class="tz9k8sbgc"/><path class="n9_ja-b5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:turtle"} {...others} />);
}

export default Component;
