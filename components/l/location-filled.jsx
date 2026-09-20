import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r04uc_fmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r04uc_fmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:location-filled"} {...others} />);
}

export default Component;
