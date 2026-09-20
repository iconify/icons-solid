import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu_w7xh2p.css';
import '../../css/l/lmrkdploq.css';
import '../../css/s/sawgbjh1b.css';
import '../../css/m/molxzo9aq.css';
import '../../css/g/ggmdoxbbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hu_w7xh2p"/><path class="lmrkdploq"/><path class="sawgbjh1b"/><path class="molxzo9aq"/><path clip-rule="evenodd" class="ggmdoxbbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lazio"} {...others} />);
}

export default Component;
