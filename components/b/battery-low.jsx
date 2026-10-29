import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nn2sdrbun.css';
import '../../css/c/co_wjhbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nn2sdrbun"/><path class="co_wjhbnl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:battery-low"} {...others} />);
}

export default Component;
