import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgisvlbog.css';
import '../../css/z/zvg2rktig.css';
import '../../css/v/v_9vh15ie.css';
import '../../css/j/j85imv7kt.css';
import '../../css/s/s50fz_25z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zgisvlbog"/><path class="zvg2rktig"/><path class="v_9vh15ie"/><path class="j85imv7kt"/><path class="s50fz_25z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:no-internet"} {...others} />);
}

export default Component;
