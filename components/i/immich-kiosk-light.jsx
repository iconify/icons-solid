import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/img8m6dpu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="img8m6dpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:immich-kiosk-light"} {...others} />);
}

export default Component;
