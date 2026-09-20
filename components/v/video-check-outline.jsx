import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv_z1rwws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qv_z1rwws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:video-check-outline"} {...others} />);
}

export default Component;
