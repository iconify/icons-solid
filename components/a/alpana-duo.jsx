import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wd78irbby.css';
import '../../css/n/nx5fowxhe.css';
import '../../css/v/vn8-qxupk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wd78irbby wm-a"/><path class="nx5fowxhe"/><path class="vn8-qxupk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alpana-duo"} {...others} />);
}

export default Component;
