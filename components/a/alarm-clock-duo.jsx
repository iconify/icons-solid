import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mt34s3bhs.css';
import '../../css/v/vig5ljzia.css';
import '../../css/d/dm66__bjg.css';
import '../../css/b/bvfbpgyzt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="mt34s3bhs"/><path class="vig5ljzia"/><path class="dm66__bjg"/><path class="bvfbpgyzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:alarm-clock-duo"} {...others} />);
}

export default Component;
