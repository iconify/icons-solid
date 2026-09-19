import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kdnqezbvd.css';
import '../../css/i/iufaf7g1w.css';
import '../../css/a/a9jjuv2wa.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="kdnqezbvd"/><path class="iufaf7g1w"/><path class="a9jjuv2wa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bw-1x1"} {...others} />);
}

export default Component;
