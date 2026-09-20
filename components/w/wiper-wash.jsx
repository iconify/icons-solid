import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8njjlb0b.css';
import '../../css/z/z4cmk4rqc.css';
import '../../css/s/s8ousacij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x8njjlb0b"/><path class="z4cmk4rqc"/><path class="s8ousacij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wiper-wash"} {...others} />);
}

export default Component;
