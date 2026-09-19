import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp7upebym.css';
import '../../css/k/k8zwn064d.css';
import '../../css/z/zry2zrb8z.css';
import '../../css/q/q1xj7ub5q.css';
import '../../css/l/lmb380bdf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="xp7upebym"><path class="k8zwn064d"/><path class="zry2zrb8z"/><path class="q1xj7ub5q"/><path class="lmb380bdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:vs-codium"} {...others} />);
}

export default Component;
