import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l_vfulbig.css';
import '../../css/f/fyzqmibvv.css';
import '../../css/c/c5o3v_5uz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l_vfulbig"/><path class="fyzqmibvv"/><path class="c5o3v_5uz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:waterdrops-broken"} {...others} />);
}

export default Component;
