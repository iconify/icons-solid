import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h35gavp_d.css';
import '../../css/n/nsadkdbpi.css';
import '../../css/d/d1w0exbxa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="h35gavp_d"/><path class="nsadkdbpi"/><path class="d1w0exbxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:stopwatch"} {...others} />);
}

export default Component;
