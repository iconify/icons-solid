import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vw94lwbnx.css';
import '../../css/t/t5hr25ewh.css';
import '../../css/c/czibwhzzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vw94lwbnx"/><path class="t5hr25ewh"/><path class="czibwhzzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:book-open-sparkles"} {...others} />);
}

export default Component;
