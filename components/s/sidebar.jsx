import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjijfobyz.css';
import '../../css/h/hxu7mzb1q.css';
import '../../css/n/nlo3h95jx.css';
import '../../css/o/ovh_y15az.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qjijfobyz wm-k"/><path class="hxu7mzb1q wm-k"/><path class="nlo3h95jx wm-shadow"/><path class="ovh_y15az wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:sidebar"} {...others} />);
}

export default Component;
