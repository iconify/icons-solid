import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzgeh0v4a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bzgeh0v4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:media-play"} {...others} />);
}

export default Component;
