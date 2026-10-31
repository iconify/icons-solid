import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_vpf-b4a.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="m_vpf-b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:video-camera-arrow-up-right-20-solid"} {...others} />);
}

export default Component;
