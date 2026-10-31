import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y3c9r13lv.css';
import '../../css/d/dj9a_iuns.css';
import '../../css/u/uu1b7vbex.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/r/rc2ns209c.css';
import '../../css/k/kkasn-b5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="y3c9r13lv"/><path class="dj9a_iuns"/><path class="uu1b7vbex wm-shine"/><path class="uh01hzbyb"/><path class="rc2ns209c"/><path class="kkasn-b5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:heart"} {...others} />);
}

export default Component;
