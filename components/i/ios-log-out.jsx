import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejh5nmbuc.css';
import '../../css/d/d7j4pp_vq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ejh5nmbuc"/><path class="d7j4pp_vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-log-out"} {...others} />);
}

export default Component;
