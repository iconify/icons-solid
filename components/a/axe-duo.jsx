import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh28vjb7v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lzpdlf60e.css';
import '../../css/p/pyo_ygb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary uh28vjb7v"/><g class="dt0cm9dhy primary"><path class="lzpdlf60e"/><path class="pyo_ygb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:axe-duo"} {...others} />);
}

export default Component;
