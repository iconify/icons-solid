import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc7ztv3im.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="kc7ztv3im"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:behance-original"} {...others} />);
}

export default Component;
