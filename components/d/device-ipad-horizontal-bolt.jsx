import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko8ti6cjn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ko8ti6cjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-ipad-horizontal-bolt"} {...others} />);
}

export default Component;
