import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9v3zbb1v.css';
import '../../css/f/f92bd6yhv.css';
import '../../css/n/n58d80ejj.css';
import '../../css/g/g462ojanp.css';
import '../../css/h/hn4tm7bfz.css';
import '../../css/d/dm_ay395a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p9v3zbb1v wm-k"/><path class="f92bd6yhv wm-deco"/><path class="n58d80ejj wm-k"/><path class="g462ojanp wm-shadow"/><path class="hn4tm7bfz wm-shine"/><path class="dm_ay395a wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:star-half"} {...others} />);
}

export default Component;
