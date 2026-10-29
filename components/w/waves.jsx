import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c23a7ub1j.css';
import '../../css/z/zaix9sf1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="c23a7ub1j"/><path class="zaix9sf1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:waves"} {...others} />);
}

export default Component;
