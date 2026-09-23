import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o61jznlym.css';
import '../../css/f/fkx2mnb9s.css';
import '../../css/f/ff9zbvbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="o61jznlym"/><path class="fkx2mnb9s"/><path class="ff9zbvbzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:user-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
