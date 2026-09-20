import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atlvj1b_e.css';
import '../../css/g/g-otsy8bu.css';
import '../../css/x/xp-y3lg0s.css';
import '../../css/n/nc2azgdgr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="atlvj1b_e"/><path class="g-otsy8bu"/><path clip-rule="evenodd" class="xp-y3lg0s"/><path class="nc2azgdgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:building-office-flat"} {...others} />);
}

export default Component;
