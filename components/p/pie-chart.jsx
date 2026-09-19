import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/le5yt4b0l.css';
import '../../css/b/bw076156z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="le5yt4b0l"/><path class="bw076156z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pie-chart"} {...others} />);
}

export default Component;
