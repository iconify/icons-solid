import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrkm51bar.css';
import '../../css/g/g_n8o-9fz.css';
import '../../css/z/zqkxn_b4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mrkm51bar"/><path class="g_n8o-9fz"/><path class="zqkxn_b4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:rating-star"} {...others} />);
}

export default Component;
