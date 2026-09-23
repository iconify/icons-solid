import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v_g122bhw.css';
import '../../css/l/leah5zbjz.css';
import '../../css/h/hior73p6y.css';
import '../../css/u/u5duy_b3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v_g122bhw"/><path class="leah5zbjz"/><path class="hior73p6y"/><path class="u5duy_b3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:lightbulb-sparkles-duotone"} {...others} />);
}

export default Component;
