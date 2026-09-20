import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp3-8kfrw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dp3-8kfrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:iphone-x-apps"} {...others} />);
}

export default Component;
