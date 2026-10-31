import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmguok5nn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rmguok5nn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:video-camera-arrow-down-left-solid"} {...others} />);
}

export default Component;
