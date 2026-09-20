import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-qhhhbmb.css';
import '../../css/l/lddmp3qwq.css';
import '../../css/i/iihcr0bma.css';
import '../../css/i/i77bn-bkr.css';
import '../../css/d/d67y9itqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h-qhhhbmb"/><path class="lddmp3qwq"/><path class="iihcr0bma"/><path class="i77bn-bkr"/><path class="d67y9itqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:charging-battery-empty"} {...others} />);
}

export default Component;
