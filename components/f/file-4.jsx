import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp5dk7q3z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rp5dk7q3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:file-4"} {...others} />);
}

export default Component;
