import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i6o0mpnho.css';
import '../../css/t/t4ml1e5da.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="i6o0mpnho"/><path class="t4ml1e5da"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:arrow-right-to-line"} {...others} />);
}

export default Component;
