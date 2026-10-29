import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/asmmd9bvh.css';
import '../../css/z/zyufg6b_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="asmmd9bvh"/><path class="zyufg6b_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:receipt-text"} {...others} />);
}

export default Component;
