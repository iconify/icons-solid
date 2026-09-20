import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/l/ljxcg8b7i.css';
import '../../css/m/mrt9bwk2y.css';
import '../../css/c/cww-bgbad.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="ljxcg8b7i"/><path class="mrt9bwk2y"/><path class="cww-bgbad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:opencv-dark"} {...others} />);
}

export default Component;
