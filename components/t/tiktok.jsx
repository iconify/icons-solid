import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxy7_2bfv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxy7_2bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:tiktok"} {...others} />);
}

export default Component;
