import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zoceahb1q.css';
import '../../css/m/ma6-19bqx.css';
import '../../css/d/dn3p8qbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zoceahb1q"/><path class="ma6-19bqx"/><path class="dn3p8qbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:devices-bold-duotone"} {...others} />);
}

export default Component;
