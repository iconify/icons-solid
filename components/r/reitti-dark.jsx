import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fox-zjbbr.css';
import '../../css/t/tc50lygvv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fox-zjbbr"/><path class="tc50lygvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reitti-dark"} {...others} />);
}

export default Component;
