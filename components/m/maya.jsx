import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/h/h_bv8bcou.css';
import '../../css/d/du5hmfmcc.css';
import '../../css/k/kkm67uicc.css';
import '../../css/z/z16u8_zyd.css';
import '../../css/b/bl5p7tb0y.css';
import '../../css/a/a1xgntbyx.css';
import '../../css/o/or360rchn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect class="h_bv8bcou"/><rect class="du5hmfmcc"/><rect class="kkm67uicc"/><rect class="z16u8_zyd"/><rect class="bl5p7tb0y"/><path class="a1xgntbyx"/><path class="or360rchn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:maya"} {...others} />);
}

export default Component;
