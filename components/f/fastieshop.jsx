import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn5jb0wse.css';
import '../../css/m/mcxpc4rcj.css';
import '../../css/y/yenxl9b8r.css';
import '../../css/s/sernl67uz.css';
import '../../css/v/v-slq5b2w.css';
import '../../css/h/hq81fobrs.css';
import '../../css/y/ymd8_eiia.css';

const viewBox = {"width":494,"height":124.7};
const content = `<path class="sn5jb0wse"/><path class="mcxpc4rcj"/><path class="yenxl9b8r"/><path class="sernl67uz"/><path class="v-slq5b2w"/><path class="hq81fobrs"/><path class="ymd8_eiia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fastieshop"} {...others} />);
}

export default Component;
