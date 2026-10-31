import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/punk_cbkk.css';
import '../../css/f/fsg_bujdf.css';
import '../../css/x/x7lmccban.css';
import '../../css/u/u3kyhbbih.css';
import '../../css/j/jw36r6tmg.css';
import '../../css/f/fmklsn7da.css';
import '../../css/y/yej001bgh.css';
import '../../css/p/p9rpp6bxi.css';
import '../../css/c/c87afqb4s.css';
import '../../css/h/hebv8xbpp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y9tr6bcfx"><path class="punk_cbkk"/><path class="fsg_bujdf"/><path class="x7lmccban"/><path class="u3kyhbbih"/><path class="jw36r6tmg"/><path class="fmklsn7da"/><path class="yej001bgh"/><path class="p9rpp6bxi"/><path class="c87afqb4s"/><path class="hebv8xbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:leo-laughing"} {...others} />);
}

export default Component;
