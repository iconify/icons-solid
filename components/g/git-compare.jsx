import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k5msskbck.css';
import '../../css/u/umhyhdbuu.css';
import '../../css/o/oa5ub0xed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k5msskbck"/><path class="umhyhdbuu"/><path class="oa5ub0xed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:git-compare"} {...others} />);
}

export default Component;
