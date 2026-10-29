import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifwo59m_m.css';
import '../../css/y/yst3ad2qv.css';
import '../../css/f/fqw3y7bte.css';
import '../../css/t/tlw9lebiu.css';
import '../../css/m/mlv8et-cb.css';
import '../../css/e/eks2v644t.css';
import '../../css/c/cgd0-xs1x.css';
import '../../css/p/p1mtiyw4s.css';
import '../../css/w/w_do05b0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ifwo59m_m wm-shadow"/><path class="wm-shadow yst3ad2qv"/><path class="fqw3y7bte"/><path class="tlw9lebiu"/><path class="mlv8et-cb"/><path class="eks2v644t"/><path class="cgd0-xs1x wm-shine"/><path class="p1mtiyw4s wm-shine"/><path class="w_do05b0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:arrow-down-left"} {...others} />);
}

export default Component;
