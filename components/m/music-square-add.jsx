import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c37_ywsig.css';
import '../../css/l/lkq7kmb6r.css';
import '../../css/o/o91kfxbtx.css';
import '../../css/m/migh2ubna.css';
import '../../css/m/mpr9t-bdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c37_ywsig"/><path class="lkq7kmb6r"/><path class="o91kfxbtx"/><path class="migh2ubna"/><path class="mpr9t-bdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-square-add"} {...others} />);
}

export default Component;
