import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f3xz25j2v.css';
import '../../css/p/pq4d7fb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="f3xz25j2v"/><path class="pq4d7fb6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:columns"} {...others} />);
}

export default Component;
