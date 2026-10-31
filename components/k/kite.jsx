import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jvm9utb-o.css';
import '../../css/e/esokio8gw.css';
import '../../css/n/niso6_jpa.css';
import '../../css/n/njp85rbka.css';
import '../../css/b/bb5x-hwog.css';
import '../../css/f/fxtnksbur.css';
import '../../css/w/wo89xnbgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jvm9utb-o"/><path class="esokio8gw wm-s"/><path class="niso6_jpa wm-shine"/><path class="njp85rbka wm-k"/><path class="bb5x-hwog wm-a"/><path class="fxtnksbur wm-s"/><path class="wm-deco wo89xnbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:kite"} {...others} />);
}

export default Component;
