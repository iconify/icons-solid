import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rchai1cmp.css';
import '../../css/s/s3ky36u6z.css';
import '../../css/l/l_ewoj67y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rchai1cmp wm-k"/><path class="s3ky36u6z wm-s"/><path class="l_ewoj67y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:kite"} {...others} />);
}

export default Component;
