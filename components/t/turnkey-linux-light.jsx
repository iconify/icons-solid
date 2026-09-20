import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq5q6vrgp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vq5q6vrgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:turnkey-linux-light"} {...others} />);
}

export default Component;
