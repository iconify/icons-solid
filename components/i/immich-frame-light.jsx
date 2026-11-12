import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g64y_l5-n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g64y_l5-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:immich-frame-light"} {...others} />);
}

export default Component;
