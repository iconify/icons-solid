import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i6aj1zbbm.css';
import '../../css/h/h464-zzap.css';
import '../../css/i/ij-4_5m6y.css';
import '../../css/j/jf0doobcy.css';
import '../../css/k/kb8ejwb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="i6aj1zbbm wm-shadow"/><path class="h464-zzap"/><path class="ij-4_5m6y"/><path class="jf0doobcy"/><path class="kb8ejwb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:blocks"} {...others} />);
}

export default Component;
