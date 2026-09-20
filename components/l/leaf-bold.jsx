import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rtudc5aqg.css';
import '../../css/f/fthlceekr.css';
import '../../css/m/m0xpkndgg.css';
import '../../css/d/dabhqx2gp.css';
import '../../css/z/zqp9xwbru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rtudc5aqg"/><path class="fthlceekr"/><path class="m0xpkndgg"/><path class="dabhqx2gp"/><path class="zqp9xwbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:leaf-bold"} {...others} />);
}

export default Component;
