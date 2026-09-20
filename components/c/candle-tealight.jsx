import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nc_-zbf5p.css';
import '../../css/y/ylhnziwri.css';
import '../../css/u/u9w229gul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nc_-zbf5p"/><ellipse class="ylhnziwri"/><path class="u9w229gul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:candle-tealight"} {...others} />);
}

export default Component;
