import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q16c5x_1d.css';
import '../../css/w/w9wz_khcd.css';
import '../../css/g/gjvxlybha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="q16c5x_1d"/><path class="w9wz_khcd"/><path class="gjvxlybha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:nightstand4-duotone"} {...others} />);
}

export default Component;
