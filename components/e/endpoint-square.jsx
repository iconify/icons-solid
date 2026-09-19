import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kcwgie5sv.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/v/vjsww2xss.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="kcwgie5sv"/><circle class="tqb_6nb6c"/><path class="vjsww2xss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:endpoint-square"} {...others} />);
}

export default Component;
