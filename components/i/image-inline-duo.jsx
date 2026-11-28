import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-gx_abdg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jlhiobc1i.css';
import '../../css/r/r9z3sqvnx.css';
import '../../css/y/yi-g0cbfw.css';
import '../../css/e/ehzilibzq.css';
import '../../css/q/qudhafvrj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-gx_abdg secondary"/><g class="dt0cm9dhy primary"><path class="jlhiobc1i"/><path class="r9z3sqvnx"/><path class="yi-g0cbfw"/><path class="ehzilibzq"/><path class="qudhafvrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:image-inline-duo"} {...others} />);
}

export default Component;
