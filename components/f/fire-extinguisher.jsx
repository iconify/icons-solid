import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ad23npbqw.css';
import '../../css/l/lb-0v7ltb.css';
import '../../css/m/mfrasobdp.css';
import '../../css/j/jn91ksbyv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ad23npbqw"/><path class="lb-0v7ltb"/><path class="mfrasobdp"/><circle class="jn91ksbyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fire-extinguisher"} {...others} />);
}

export default Component;
