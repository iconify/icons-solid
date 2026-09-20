import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko0j1x2yd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ko0j1x2yd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chart-pie-two-solid"} {...others} />);
}

export default Component;
