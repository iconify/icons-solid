import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tpfbo821s.css';
import '../../css/x/x8rf0ibyf.css';
import '../../css/l/l8xp_mbyt.css';
import '../../css/m/m6b0-nb8k.css';
import '../../css/m/mkm2dm7wi.css';
import '../../css/n/n9m2gob2c.css';
import '../../css/h/hou73ggdo.css';
import '../../css/z/zxxw81bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tpfbo821s wm-k"/><path class="wm-k x8rf0ibyf"/><path class="l8xp_mbyt wm-k"/><path class="m6b0-nb8k wm-shine"/><path class="mkm2dm7wi wm-k"/><path class="n9m2gob2c wm-k"/><path class="hou73ggdo wm-k"/><path class="wm-shine zxxw81bfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chevron-first"} {...others} />);
}

export default Component;
