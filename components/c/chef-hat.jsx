import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rpx4jfbtr.css';
import '../../css/u/u7kol1bgd.css';
import '../../css/e/ehdvezbbi.css';
import '../../css/x/x7a1kcb7v.css';
import '../../css/u/u8hilpblx.css';
import '../../css/m/mmdv3mbfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rpx4jfbtr wm-shadow"/><path class="u7kol1bgd"/><path class="ehdvezbbi"/><path class="x7a1kcb7v"/><path class="u8hilpblx"/><path class="mmdv3mbfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:chef-hat"} {...others} />);
}

export default Component;
