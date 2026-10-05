import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/uegmpib8n.css';
import '../../css/r/ry--o0ych.css';
import '../../css/k/kuw9g5b5o.css';
import '../../css/e/ekw201c_n.css';
import '../../css/f/f1-s3jb1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="uegmpib8n"/><path class="ry--o0ych"/><path class="kuw9g5b5o"/><path class="ekw201c_n"/><path class="f1-s3jb1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:scan-line"} {...others} />);
}

export default Component;
