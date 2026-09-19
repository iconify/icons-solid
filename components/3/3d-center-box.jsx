import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lecpydg2p.css';
import '../../css/k/kpsn8jbjf.css';
import '../../css/h/h67o_cchx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lecpydg2p"/><path class="kpsn8jbjf"/><path class="h67o_cchx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:3d-center-box"} {...others} />);
}

export default Component;
