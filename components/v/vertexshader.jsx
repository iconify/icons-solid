import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n41p3s9mq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n41p3s9mq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:vertexshader"} {...others} />);
}

export default Component;
