import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y1s8_-93b.css';
import '../../css/s/szyp9mbva.css';
import '../../css/b/baoogbiqr.css';
import '../../css/z/zgjshfhxk.css';
import '../../css/o/o_yfqzfoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="y1s8_-93b"/><path class="szyp9mbva"/><path class="baoogbiqr"/><path class="zgjshfhxk"/><path class="o_yfqzfoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-man-beard"} {...others} />);
}

export default Component;
