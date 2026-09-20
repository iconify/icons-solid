import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqd6bpb0l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qqd6bpb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hydrus-web-dark"} {...others} />);
}

export default Component;
