import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg2jjbcjj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lg2jjbcjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minimus-light"} {...others} />);
}

export default Component;
