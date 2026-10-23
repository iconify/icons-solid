import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wtdviabfg.css';
import '../../css/a/a9b_oobde.css';
import '../../css/u/uzu-fovlv.css';
import '../../css/u/umjjmybnc.css';
import '../../css/m/mg66cpbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="wtdviabfg"/><path class="a9b_oobde"/><path class="uzu-fovlv"/><path class="umjjmybnc"/><path class="mg66cpbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:pill"} {...others} />);
}

export default Component;
