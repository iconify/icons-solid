import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le7bgtmct.css';

const viewBox = {"width":224,"height":488};
const content = `<path class="le7bgtmct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:facebook"} {...others} />);
}

export default Component;
