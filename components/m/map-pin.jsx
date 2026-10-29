import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbnxg3b-j.css';
import '../../css/s/sxj-2bc0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fbnxg3b-j wm-k"/><path class="sxj-2bc0x wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:map-pin"} {...others} />);
}

export default Component;
