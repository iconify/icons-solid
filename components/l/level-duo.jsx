import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1ijevbzr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dzkdlpbuh.css';
import '../../css/u/u5u_ynwfg.css';
import '../../css/e/ev46pvu6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m1ijevbzr secondary"/><g class="dt0cm9dhy primary"><path class="dzkdlpbuh"/><path class="u5u_ynwfg"/><path class="ev46pvu6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:level-duo"} {...others} />);
}

export default Component;
