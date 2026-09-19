import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od-ttjbcm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="od-ttjbcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-battery-dead"} {...others} />);
}

export default Component;
