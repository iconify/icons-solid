import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qt1qw-bap.css';
import '../../css/q/q511u5m8e.css';
import '../../css/k/k_lneb11t.css';
import '../../css/k/kfbj6uzww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qt1qw-bap wm-k"/><path class="q511u5m8e wm-shadow"/><path class="k_lneb11t wm-k"/><path class="kfbj6uzww wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:archive-restore-engrave"} {...others} />);
}

export default Component;
