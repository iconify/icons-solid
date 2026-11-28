import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t6kv_ibyg.css';
import '../../css/d/dq89wyjct.css';
import '../../css/e/e9v8jcb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="t6kv_ibyg"/><path class="dq89wyjct"/><path class="e9v8jcb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-code"} {...others} />);
}

export default Component;
