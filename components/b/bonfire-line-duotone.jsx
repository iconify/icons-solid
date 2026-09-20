import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j_kybcbiy.css';
import '../../css/j/jwvedsvir.css';
import '../../css/o/oltiaob-e.css';
import '../../css/x/x1qn8acjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j_kybcbiy"/><path class="jwvedsvir"/><path class="oltiaob-e"/><path class="x1qn8acjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bonfire-line-duotone"} {...others} />);
}

export default Component;
