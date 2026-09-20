import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/viqdd9b0h.css';
import '../../css/t/texupnbuv.css';
import '../../css/e/ep_s25bym.css';
import '../../css/y/y1suvmn2f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="viqdd9b0h"/><path class="texupnbuv"/><path class="ep_s25bym"/><path class="y1suvmn2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cone-shape"} {...others} />);
}

export default Component;
