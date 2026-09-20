import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/ut-zlabur.css';
import '../../css/u/u7s3fblud.css';
import '../../css/x/x953_49sc.css';
import '../../css/t/tgdr_pb4c.css';
import '../../css/n/n6bxqkcbp.css';
import '../../css/m/mslqv39-c.css';
import '../../css/d/dvujccbmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ut-zlabur"/><path class="u7s3fblud"/><path class="x953_49sc"/><path class="tgdr_pb4c"/><path class="n6bxqkcbp"/><path class="mslqv39-c"/><path class="dvujccbmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:voice-typing-word-convert"} {...others} />);
}

export default Component;
