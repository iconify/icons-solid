import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/djhgc8bkm.css';
import '../../css/s/sg6_j5bfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="djhgc8bkm"/><path class="sg6_j5bfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:octahedron-plus"} {...others} />);
}

export default Component;
