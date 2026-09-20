import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nnbq32cap.css';
import '../../css/s/sr5bgubyr.css';
import '../../css/b/bv16y576p.css';
import '../../css/t/t8k39sbmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nnbq32cap"/><path class="sr5bgubyr"/><path class="bv16y576p"/><path class="t8k39sbmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-5-linear"} {...others} />);
}

export default Component;
