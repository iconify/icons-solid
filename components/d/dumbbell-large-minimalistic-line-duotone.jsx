import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/ddn8p_buc.css';
import '../../css/r/rjw-p2bwy.css';
import '../../css/d/d3v247bhu.css';
import '../../css/a/ay0tmzbaz.css';
import '../../css/a/aj5bbee7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ddn8p_buc"/><path class="rjw-p2bwy"/><path class="d3v247bhu"/><path class="ay0tmzbaz"/><path class="aj5bbee7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-large-minimalistic-line-duotone"} {...others} />);
}

export default Component;
