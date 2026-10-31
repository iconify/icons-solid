import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xyqs1j9li.css';
import '../../css/n/nogltubzb.css';
import '../../css/a/a0in21bie.css';
import '../../css/i/itvedvbjr.css';
import '../../css/v/v9ynk5b2o.css';
import '../../css/j/j_1ettbdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xyqs1j9li"/><path class="nogltubzb"/><path class="a0in21bie"/><path class="itvedvbjr"/><path class="v9ynk5b2o"/><path class="j_1ettbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cast"} {...others} />);
}

export default Component;
