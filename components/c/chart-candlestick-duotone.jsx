import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/drq9pyb0s.css';
import '../../css/c/cza6ut-na.css';
import '../../css/s/slcgv9bsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="drq9pyb0s"/><path class="cza6ut-na"/><path class="slcgv9bsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:chart-candlestick-duotone"} {...others} />);
}

export default Component;
