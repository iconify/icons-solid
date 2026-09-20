import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrn33y8hk.css';
import '../../css/r/r28imlblv.css';
import '../../css/u/uq2pkhb-g.css';
import '../../css/n/nmg90_b5o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lrn33y8hk"/><path class="r28imlblv"/><path class="uq2pkhb-g"/><path class="nmg90_b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:inbox-block"} {...others} />);
}

export default Component;
