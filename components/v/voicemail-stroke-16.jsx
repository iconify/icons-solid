import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rlix6ub3a.css';
import '../../css/b/bteimacwg.css';
import '../../css/u/u6x4exbvo.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><circle class="rlix6ub3a"/><circle class="bteimacwg"/><path class="u6x4exbvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:voicemail-stroke-16"} {...others} />);
}

export default Component;
