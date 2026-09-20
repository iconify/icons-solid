import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw13ow3ss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vw13ow3ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:progress-star-four-points"} {...others} />);
}

export default Component;
