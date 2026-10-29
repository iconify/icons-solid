import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_hhr9bie.css';
import '../../css/p/p-r6vcf9w.css';
import '../../css/b/buhgi4b5h.css';
import '../../css/w/w039xj9wn.css';
import '../../css/a/aj9zo_l6e.css';
import '../../css/y/yc1uhw85u.css';
import '../../css/p/p71zdybmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q_hhr9bie wm-deco"/><path class="p-r6vcf9w wm-k"/><path class="buhgi4b5h wm-k"/><path class="w039xj9wn wm-k"/><path class="aj9zo_l6e wm-k"/><path class="wm-k yc1uhw85u"/><path class="p71zdybmo wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:send"} {...others} />);
}

export default Component;
