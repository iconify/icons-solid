import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iou39of8p.css';
import '../../css/j/jd_xr_qqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iou39of8p"/><path class="jd_xr_qqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:rating-star-ribbon"} {...others} />);
}

export default Component;
