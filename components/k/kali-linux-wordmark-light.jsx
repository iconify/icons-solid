import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irtau8cwz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="irtau8cwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kali-linux-wordmark-light"} {...others} />);
}

export default Component;
