import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/l/l0y7oxb1q.css';
import '../../css/t/tugvc23ag.css';
import '../../css/n/n5ykb5bnj.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="l0y7oxb1q"/><path class="tugvc23ag"/><path class="n5ykb5bnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:vitest-dark"} {...others} />);
}

export default Component;
