import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s07htpbtb.css';
import '../../css/c/cdmk0wbri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s07htpbtb"/><path class="cdmk0wbri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camera-filled"} {...others} />);
}

export default Component;
