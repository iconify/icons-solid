import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rq8p9nb-g.css';
import '../../css/i/ihjdqbbnc.css';
import '../../css/r/rdkbckboj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rq8p9nb-g"/><path class="ihjdqbbnc"/><path class="rdkbckboj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:google-drive"} {...others} />);
}

export default Component;
