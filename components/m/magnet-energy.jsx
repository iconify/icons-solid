import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tl53gk5oq.css';
import '../../css/v/vki1wbbir.css';
import '../../css/t/tf-ifnb-l.css';
import '../../css/g/gbsyi7bih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="tl53gk5oq"/><path class="vki1wbbir"/><path class="tf-ifnb-l"/><path class="gbsyi7bih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:magnet-energy"} {...others} />);
}

export default Component;
