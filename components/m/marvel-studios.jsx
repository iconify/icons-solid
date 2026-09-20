import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz7t2sb4v.css';
import '../../css/w/wuq0f-bje.css';
import '../../css/g/ggkrbvb_m.css';
import '../../css/x/x6st_t78a.css';
import '../../css/o/oq_mbfbxh.css';

const viewBox = {"width":300,"height":67.216};
const content = `<path class="bz7t2sb4v"/><path class="wuq0f-bje"/><path class="ggkrbvb_m"/><path class="x6st_t78a"/><path class="oq_mbfbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:marvel-studios"} {...others} />);
}

export default Component;
