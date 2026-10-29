import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ar12u5ppj.css';
import '../../css/q/q6lk0mb6n.css';
import '../../css/u/u6lcmebpx.css';
import '../../css/e/earovrbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ar12u5ppj wm-k"/><path class="q6lk0mb6n"/><path class="u6lcmebpx"/><path class="earovrbkh wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:screen-share"} {...others} />);
}

export default Component;
