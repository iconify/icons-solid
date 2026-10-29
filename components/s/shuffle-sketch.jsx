import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lwnyuac7m.css';
import '../../css/o/o3-0pkjoj.css';
import '../../css/t/tgtp_hsjq.css';
import '../../css/o/owf7idx3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lwnyuac7m wm-k"/><path class="o3-0pkjoj wm-a"/><path class="tgtp_hsjq wm-k"/><path class="owf7idx3m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shuffle-sketch"} {...others} />);
}

export default Component;
