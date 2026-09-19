import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/iu3dlo15a.css';
import '../../css/a/au2_p3dfi.css';
import '../../css/e/e1vx56_3m.css';
import '../../css/h/h9jsu-72m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path clip-rule="evenodd" class="iu3dlo15a"/><path clip-rule="evenodd" class="au2_p3dfi"/><path clip-rule="evenodd" class="e1vx56_3m"/><path class="h9jsu-72m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:branch-two"} {...others} />);
}

export default Component;
