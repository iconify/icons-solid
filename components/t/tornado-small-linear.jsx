import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k4ialmxqs.css';
import '../../css/i/ik-b2z0to.css';
import '../../css/l/l8ziygp-z.css';
import '../../css/b/bdw1r4b6v.css';
import '../../css/d/dfx-lljpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k4ialmxqs"/><path class="ik-b2z0to"/><path class="l8ziygp-z"/><path class="bdw1r4b6v"/><path class="dfx-lljpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-small-linear"} {...others} />);
}

export default Component;
