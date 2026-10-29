import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iswkj4buy.css';
import '../../css/v/v6yzk-b5c.css';
import '../../css/k/kpgvotblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="iswkj4buy"/><path class="v6yzk-b5c wm-a"/><path class="kpgvotblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toolbox-duo"} {...others} />);
}

export default Component;
