import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v03jynzrb.css';
import '../../css/t/tie_amhlk.css';
import '../../css/e/emha3wbqe.css';
import '../../css/i/ihj2_9b2p.css';
import '../../css/b/blawizb7e.css';
import '../../css/e/evjjbybyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v03jynzrb"/><path class="tie_amhlk wm-shine"/><path class="emha3wbqe wm-k"/><path class="ihj2_9b2p wm-s"/><path class="blawizb7e"/><path class="evjjbybyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:user-minus"} {...others} />);
}

export default Component;
