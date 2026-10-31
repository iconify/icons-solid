import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qevnto7eo.css';
import '../../css/j/jbx8ahbdi.css';
import '../../css/g/gjj8xkb8a.css';
import '../../css/c/cgi6aebyp.css';
import '../../css/j/jes-ovvpz.css';
import '../../css/p/pwdc-me_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qevnto7eo"/><path class="jbx8ahbdi wm-s"/><path class="gjj8xkb8a wm-shine"/><path class="cgi6aebyp wm-k"/><path class="jes-ovvpz wm-a"/><path class="pwdc-me_r wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:server-cog"} {...others} />);
}

export default Component;
