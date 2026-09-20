import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_z4w9s3h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s_z4w9s3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:wifi-low-solid"} {...others} />);
}

export default Component;
