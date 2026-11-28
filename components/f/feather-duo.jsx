import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpun8dbkf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j_djel1ti.css';
import '../../css/v/v7c-qfpma.css';
import '../../css/q/qf2cg9bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tpun8dbkf"/><g class="dt0cm9dhy primary"><path class="j_djel1ti"/><path class="v7c-qfpma"/><path class="qf2cg9bxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:feather-duo"} {...others} />);
}

export default Component;
