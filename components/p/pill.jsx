import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0y8n8b_v.css';
import '../../css/m/mzxqpkbgh.css';
import '../../css/u/ua567rbre.css';
import '../../css/z/zyw023bwj.css';
import '../../css/h/hjrszmbqm.css';
import '../../css/p/p71cz581g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k y0y8n8b_v"/><path class="mzxqpkbgh wm-deco"/><path class="ua567rbre wm-k"/><path class="wm-shadow zyw023bwj"/><path class="hjrszmbqm wm-shine"/><path class="p71cz581g wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:pill"} {...others} />);
}

export default Component;
