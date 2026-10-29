import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jwt1z3bvx.css';
import '../../css/z/zs7_aabuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jwt1z3bvx"/><path class="zs7_aabuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:case-upper"} {...others} />);
}

export default Component;
