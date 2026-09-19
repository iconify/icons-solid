import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wul82ibrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wul82ibrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:no-selfie-stick-allowed"} {...others} />);
}

export default Component;
