import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t09dwgwot.css';
import '../../css/z/zc4v9w_9s.css';
import '../../css/p/p57ho085m.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="t09dwgwot"/><path class="zc4v9w_9s"/><path class="p57ho085m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:numpy-wordmark"} {...others} />);
}

export default Component;
