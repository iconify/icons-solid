import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v72bz_oox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v72bz_oox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:motion-sensor-movement"} {...others} />);
}

export default Component;
