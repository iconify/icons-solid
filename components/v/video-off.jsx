import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/ut275gbvs.css';
import '../../css/q/qa0bhtbaw.css';
import '../../css/l/lqdy3rb7m.css';
import '../../css/f/fn9xzlbpx.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ut275gbvs"/><path class="qa0bhtbaw wm-shine"/><path class="lqdy3rb7m wm-k"/><path class="fn9xzlbpx wm-a"/><path class="qr4ochb5c wm-s"/><path class="jgtis7b9v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:video-off"} {...others} />);
}

export default Component;
