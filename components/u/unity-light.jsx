import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/l/lkde57b9u.css';
import '../../css/d/d_rj9dy1l.css';
import '../../css/j/jhra77bvk.css';
import '../../css/s/sxh1z9g7y.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="lkde57b9u"/><path class="d_rj9dy1l"/><path class="jhra77bvk"/><path class="sxh1z9g7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:unity-light"} {...others} />);
}

export default Component;
