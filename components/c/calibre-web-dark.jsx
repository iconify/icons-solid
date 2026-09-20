import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-zmqpb1k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l-zmqpb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:calibre-web-dark"} {...others} />);
}

export default Component;
