import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1_pjbc3p.css';
import '../../css/v/vwgo760mv.css';
import '../../css/j/jf6is2dzt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k1_pjbc3p"/><path class="vwgo760mv"/><circle class="jf6is2dzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:duck"} {...others} />);
}

export default Component;
