import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cehpctv3j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cehpctv3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:go2rtc-dark"} {...others} />);
}

export default Component;
