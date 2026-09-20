import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdw8jccgb.css';
import '../../css/l/lduww_jdn.css';
import '../../css/g/g55iq_ryj.css';
import '../../css/e/e_g6gnite.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tdw8jccgb"/><path class="lduww_jdn"/><path class="g55iq_ryj"/><path class="e_g6gnite"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:credit-card"} {...others} />);
}

export default Component;
