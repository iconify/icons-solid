import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yigoh0b8f.css';
import '../../css/h/hoth7qk6d.css';
import '../../css/x/xgk3jto0j.css';
import '../../css/l/ld7eseqtz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yigoh0b8f"/><path class="hoth7qk6d"/><path class="xgk3jto0j"/><path class="ld7eseqtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-crop-strong"} {...others} />);
}

export default Component;
