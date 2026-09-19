import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s3yqy7b9h.css';
import '../../css/x/xh0dfb2xp.css';
import '../../css/s/sudmfg4_x.css';
import '../../css/m/mvwn57bab.css';
import '../../css/a/azgtz4rsq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="s3yqy7b9h"/><path clip-rule="evenodd" class="xh0dfb2xp"/><path class="sudmfg4_x"/><path clip-rule="evenodd" class="mvwn57bab"/><path class="azgtz4rsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:screenshot-two"} {...others} />);
}

export default Component;
