import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eozqnqbsa.css';
import '../../css/s/sfahd8b6o.css';
import '../../css/y/yqczzybvf.css';
import '../../css/b/b8at60bmi.css';
import '../../css/m/mq8zgi3rl.css';
import '../../css/g/gwxtade-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="eozqnqbsa"/><path class="sfahd8b6o"/><path class="yqczzybvf"/><path class="b8at60bmi"/><path class="mq8zgi3rl"/><path clip-rule="evenodd" class="gwxtade-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-circle-bold"} {...others} />);
}

export default Component;
