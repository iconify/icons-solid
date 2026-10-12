import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dastyi8ad.css';
import '../../css/r/rln9g247b.css';
import '../../css/v/v9-g97b-r.css';
import '../../css/j/jo7gq1cec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dastyi8ad"/><path class="rln9g247b"/><path class="v9-g97b-r"/><path class="jo7gq1cec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:settings-2-duotone"} {...others} />);
}

export default Component;
