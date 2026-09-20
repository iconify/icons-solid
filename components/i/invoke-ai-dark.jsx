import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxbvolhhi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yxbvolhhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:invoke-ai-dark"} {...others} />);
}

export default Component;
