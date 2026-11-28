import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4x0e2ert.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t3zbr9bdz.css';
import '../../css/t/tvtinublm.css';
import '../../css/a/ards16uyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary w4x0e2ert"/><g class="dt0cm9dhy primary"><path class="t3zbr9bdz"/><path class="tvtinublm"/><path class="ards16uyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:facebook-duo"} {...others} />);
}

export default Component;
