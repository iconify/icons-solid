import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/surq_x5uw.css';
import '../../css/z/z0cv2cc8s.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="surq_x5uw"/><path class="z0cv2cc8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-administration"} {...others} />);
}

export default Component;
