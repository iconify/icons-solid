import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isqzje__y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="isqzje__y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:music-assistant-dark"} {...others} />);
}

export default Component;
