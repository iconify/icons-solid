import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_wgz9s9o.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="l_wgz9s9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:stumbleupon-circle"} {...others} />);
}

export default Component;
