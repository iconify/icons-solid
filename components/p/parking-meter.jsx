import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zu2-l22yg.css';
import '../../css/p/pjhp_mbfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zu2-l22yg"/><path class="pjhp_mbfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:parking-meter"} {...others} />);
}

export default Component;
