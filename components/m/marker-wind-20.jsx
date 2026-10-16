import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgjp5_b_u.css';
import '../../css/k/kue93s39j.css';
import '../../css/w/wop9ei26x.css';
import '../../css/w/ws7yeeb4j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wgjp5_b_u"/><path class="kue93s39j"/><path class="wop9ei26x"/><path class="ws7yeeb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-wind-20"} {...others} />);
}

export default Component;
