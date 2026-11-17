import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g91-cs_7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g91-cs_7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:smart-camera"} {...others} />);
}

export default Component;
