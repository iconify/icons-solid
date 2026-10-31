import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/afr90eu9t.css';
import '../../css/q/q264xg83o.css';
import '../../css/b/bl2p6ts3c.css';
import '../../css/f/fnofnbias.css';
import '../../css/r/rt9v9sb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="afr90eu9t wm-k"/><path class="q264xg83o wm-shine"/><path class="bl2p6ts3c wm-shine"/><path class="fnofnbias wm-shine"/><path class="rt9v9sb0t wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:folder-check"} {...others} />);
}

export default Component;
