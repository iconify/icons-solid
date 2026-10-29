import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c995k36nr.css';
import '../../css/i/iz24vsbxs.css';
import '../../css/k/kpgvotblb.css';
import '../../css/v/v6yzk-b5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c995k36nr wm-k"/><path class="iz24vsbxs wm-shadow"/><path class="kpgvotblb wm-k"/><path class="v6yzk-b5c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toolbox-engrave"} {...others} />);
}

export default Component;
