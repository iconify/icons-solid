import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e4rcsvbfj.css';
import '../../css/v/v5dtwfb0w.css';
import '../../css/x/xrfn3bcyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="e4rcsvbfj"/><path class="v5dtwfb0w wm-a"/><path class="xrfn3bcyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-question-duo"} {...others} />);
}

export default Component;
