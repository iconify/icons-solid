import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wgaq2_nok.css';
import '../../css/y/ydg910bfg.css';
import '../../css/r/rnsc04beb.css';
import '../../css/y/y95393_dl.css';
import '../../css/w/wci8o2bvn.css';
import '../../css/d/dx8clgbog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wgaq2_nok"/><path class="wm-s ydg910bfg"/><path class="rnsc04beb wm-s"/><path class="y95393_dl"/><path class="wci8o2bvn"/><path class="dx8clgbog wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:database-backup-duo"} {...others} />);
}

export default Component;
