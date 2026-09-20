import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7y57bcmv.css';
import '../../css/l/lkz8h1lgg.css';
import '../../css/y/y0brb2b7c.css';
import '../../css/n/nous9knry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s7y57bcmv"/><path class="lkz8h1lgg"/><path class="y0brb2b7c"/><path class="nous9knry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-vibration-bold-duotone"} {...others} />);
}

export default Component;
