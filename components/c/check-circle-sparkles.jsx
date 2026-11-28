import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s4n8z_bgd.css';
import '../../css/e/e9v8jcb4j.css';
import '../../css/z/zopl36bmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="s4n8z_bgd"/><path class="e9v8jcb4j"/><path class="zopl36bmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:check-circle-sparkles"} {...others} />);
}

export default Component;
