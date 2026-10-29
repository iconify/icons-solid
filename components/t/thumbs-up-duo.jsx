import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b99bgvatr.css';
import '../../css/l/lu_9qfbls.css';
import '../../css/m/mk7_fccwz.css';
import '../../css/c/cvwjuk0bx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b99bgvatr"/><path class="lu_9qfbls wm-a"/><path class="mk7_fccwz wm-a"/><path class="cvwjuk0bx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thumbs-up-duo"} {...others} />);
}

export default Component;
