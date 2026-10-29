import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dckrksbvf.css';
import '../../css/d/dn9oi3j2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dckrksbvf wm-k"/><path class="dn9oi3j2f wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:heading"} {...others} />);
}

export default Component;
