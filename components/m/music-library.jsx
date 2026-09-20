import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6fo1hbmi.css';
import '../../css/q/qv-p7ubas.css';
import '../../css/u/u-iqtibkl.css';
import '../../css/l/lsamq19hc.css';
import '../../css/w/wlrlsu9vn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v6fo1hbmi"/><path class="qv-p7ubas"/><path class="u-iqtibkl"/><path class="lsamq19hc"/><path class="wlrlsu9vn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-library"} {...others} />);
}

export default Component;
