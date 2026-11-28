import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/thjkpabpk.css';
import '../../css/e/e5wrxmbgb.css';
import '../../css/g/ghjgxjbgi.css';
import '../../css/q/qm72ocbza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="thjkpabpk"/><path class="e5wrxmbgb"/><path class="ghjgxjbgi"/><path class="qm72ocbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:speaker-box"} {...others} />);
}

export default Component;
