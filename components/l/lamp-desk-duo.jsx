import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q_x4lp40o.css';
import '../../css/l/lx6vztc2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q_x4lp40o"/><path class="lx6vztc2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lamp-desk-duo"} {...others} />);
}

export default Component;
