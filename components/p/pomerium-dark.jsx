import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh5nprbqb.css';
import '../../css/r/rcnhk0biq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zh5nprbqb"/><path class="rcnhk0biq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pomerium-dark"} {...others} />);
}

export default Component;
