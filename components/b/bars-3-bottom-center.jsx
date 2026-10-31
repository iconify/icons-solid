import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpi02u7-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wpi02u7-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:bars-3-bottom-center"} {...others} />);
}

export default Component;
