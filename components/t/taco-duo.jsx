import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyruocc3c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bm_askbkq.css';
import '../../css/c/cxp113bbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jyruocc3c secondary"/><g class="dt0cm9dhy primary"><path class="bm_askbkq"/><path class="cxp113bbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:taco-duo"} {...others} />);
}

export default Component;
