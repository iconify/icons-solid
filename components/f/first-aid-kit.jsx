import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x43rut11s.css';
import '../../css/p/p79dbgb4i.css';
import '../../css/l/l2nq_1dmv.css';
import '../../css/r/r-ftlebhj.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/b2fexp5qk.css';
import '../../css/k/kubkwhhnd.css';
import '../../css/c/c-ogmabxv.css';
import '../../css/x/x3e1hiz9q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="x43rut11s"/><path class="p79dbgb4i"/><path class="l2nq_1dmv"/><path class="r-ftlebhj"/><g class="ij2x_72vy"><path class="b2fexp5qk"/><path class="kubkwhhnd"/><path class="c-ogmabxv"/><path class="x3e1hiz9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:first-aid-kit"} {...others} />);
}

export default Component;
