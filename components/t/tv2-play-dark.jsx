import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aljiy_w3h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aljiy_w3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tv2-play-dark"} {...others} />);
}

export default Component;
