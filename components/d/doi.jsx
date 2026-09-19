import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qva2j-bqj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qva2j-bqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:doi"} {...others} />);
}

export default Component;
