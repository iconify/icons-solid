import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iis2jirxu.css';
import '../../css/f/fpfbwk8vq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iis2jirxu"/><path class="fpfbwk8vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:outline"} {...others} />);
}

export default Component;
