import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mzht2dbcv.css';
import '../../css/v/vzgygcepj.css';
import '../../css/j/jwj5s6brs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mzht2dbcv"/><path class="vzgygcepj"/><path class="jwj5s6brs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:danger-circle-bold-duotone"} {...others} />);
}

export default Component;
