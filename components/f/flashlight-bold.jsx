import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r1q0bcchq.css';
import '../../css/o/o9unslmnw.css';
import '../../css/l/lt6ufqbxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r1q0bcchq"/><path class="o9unslmnw"/><path clip-rule="evenodd" class="lt6ufqbxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-bold"} {...others} />);
}

export default Component;
