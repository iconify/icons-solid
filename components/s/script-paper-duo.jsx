import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvfectegd.css';
import '../../css/y/y2tz9o_fn.css';
import '../../css/w/wweiqp_0g.css';
import '../../css/g/gh_4loaot.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fvfectegd"/><path class="y2tz9o_fn"/><path class="wweiqp_0g"/><path class="gh_4loaot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:script-paper-duo"} {...others} />);
}

export default Component;
