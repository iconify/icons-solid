import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz9flcc9s.css';
import '../../css/v/vwqq1x5bt.css';
import '../../css/y/yt3p9tmeq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz9flcc9s"/><path class="vwqq1x5bt"/><path class="yt3p9tmeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:separator-vertical-bold"} {...others} />);
}

export default Component;
