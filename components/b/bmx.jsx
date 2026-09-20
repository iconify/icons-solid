import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw0ueac3u.css';
import '../../css/c/ctaewz5_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pw0ueac3u"/><path class="ctaewz5_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bmx"} {...others} />);
}

export default Component;
