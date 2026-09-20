import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cldzy6oen.css';
import '../../css/y/y0rn8rb3v.css';
import '../../css/e/ej6bo1bfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cldzy6oen"/><rect class="y0rn8rb3v"/><rect class="ej6bo1bfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chart-bar-stacked"} {...others} />);
}

export default Component;
