import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sr_q189-e.css';
import '../../css/x/x5np3ybje.css';
import '../../css/s/s_n-c25fe.css';
import '../../css/q/qmqxr7c2u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="sr_q189-e"/><path class="x5np3ybje"/><path class="s_n-c25fe"/><path class="qmqxr7c2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:burn-duo"} {...others} />);
}

export default Component;
