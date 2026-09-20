import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv-g7mbyv.css';
import '../../css/m/mvrzh0bko.css';
import '../../css/n/nmg90_b5o.css';
import '../../css/r/r81bukzbz.css';
import '../../css/q/qfrwy8bml.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dv-g7mbyv"/><path class="mvrzh0bko"/><path class="nmg90_b5o"/><path class="r81bukzbz"/><path class="qfrwy8bml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:inbox-lock"} {...others} />);
}

export default Component;
