import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwlmahb8s.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="cwlmahb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:play-circle-outline"} {...others} />);
}

export default Component;
