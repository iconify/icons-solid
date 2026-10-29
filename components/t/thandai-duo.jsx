import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m4-wfr62v.css';
import '../../css/y/ykr9ewb0l.css';
import '../../css/o/oux-l1bxs.css';
import '../../css/q/qi_k5vohi.css';
import '../../css/g/g9-zxqbbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m4-wfr62v"/><path class="wm-a ykr9ewb0l"/><path class="oux-l1bxs wm-a"/><path class="qi_k5vohi"/><path class="g9-zxqbbb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thandai-duo"} {...others} />);
}

export default Component;
