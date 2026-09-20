import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/ap3v_dbtb.css';
import '../../css/s/s94kl36sm.css';
import '../../css/q/qzdalccxx.css';
import '../../css/r/rqtg-ywuv.css';
import '../../css/e/e5n7kcbbf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ap3v_dbtb"/><path class="s94kl36sm"/><path class="qzdalccxx"/><path class="rqtg-ywuv"/><path class="e5n7kcbbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dumbell"} {...others} />);
}

export default Component;
