import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tszzcnimi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tszzcnimi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:fantasy-flight-games"} {...others} />);
}

export default Component;
