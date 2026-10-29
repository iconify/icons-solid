import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ekmmp9bch.css';
import '../../css/r/rwe_4gjuh.css';
import '../../css/j/j06sm_bes.css';
import '../../css/q/q-71ghqrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ekmmp9bch wm-k"/><path class="rwe_4gjuh wm-a"/><path class="j06sm_bes wm-k"/><path class="q-71ghqrx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-turban-sketch"} {...others} />);
}

export default Component;
