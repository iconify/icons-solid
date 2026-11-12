import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1ua1qbwt.css';
import '../../css/h/h1s01wbec.css';
import '../../css/w/w3h81nb0j.css';
import '../../css/f/f7vg4objy.css';
import '../../css/g/g34jjsfbv.css';
import '../../css/y/yi13_wb_i.css';
import '../../css/w/wicjk6buj.css';
import '../../css/v/vk5vof48l.css';
import '../../css/y/yx_jfbcyy.css';
import '../../css/i/ig9bpsb1p.css';
import '../../css/y/y6e9ilb9e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j1ua1qbwt"/><path class="h1s01wbec"/><path class="w3h81nb0j"/><path class="f7vg4objy"/><path class="g34jjsfbv"/><path class="yi13_wb_i"/><path class="wicjk6buj"/><path class="vk5vof48l"/><path class="yx_jfbcyy"/><path class="ig9bpsb1p"/><path class="y6e9ilb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bun"} {...others} />);
}

export default Component;
