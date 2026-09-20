import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mz90dcccr.css';
import '../../css/v/va0wxdzar.css';
import '../../css/z/zzoxeseho.css';
import '../../css/f/fwccf37wm.css';
import '../../css/m/makdssbcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mz90dcccr"/><circle class="va0wxdzar"/><circle class="zzoxeseho"/><path class="fwccf37wm"/><path class="makdssbcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-2-linear"} {...others} />);
}

export default Component;
