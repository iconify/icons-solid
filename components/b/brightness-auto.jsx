import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zk8kwsb0p.css';

const viewBox = {"width":488,"height":496};
const content = `<path class="zk8kwsb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:brightness-auto"} {...others} />);
}

export default Component;
