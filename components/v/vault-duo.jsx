import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a70aibbjc.css';
import '../../css/f/f48qsgb5t.css';
import '../../css/y/yj_y3dp7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a70aibbjc"/><path class="f48qsgb5t wm-a"/><path class="yj_y3dp7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:vault-duo"} {...others} />);
}

export default Component;
