import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxq7scbii.css';
import '../../css/v/v2qz0z9zp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxq7scbii"/><path class="v2qz0z9zp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-file-jpg"} {...others} />);
}

export default Component;
