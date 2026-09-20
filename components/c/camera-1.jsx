import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2913mrlt.css';
import '../../css/g/g0f9vvt3n.css';
import '../../css/j/j9wvwgbzu.css';
import '../../css/s/s338fsbeu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="t2913mrlt"/><path class="g0f9vvt3n"/><path class="j9wvwgbzu"/><path class="s338fsbeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:camera-1"} {...others} />);
}

export default Component;
